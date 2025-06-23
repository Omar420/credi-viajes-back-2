import type { IEmitParams, IGroupEmitParams } from "@src/types";

import { Server, Socket } from "socket.io";
import jwt from "jsonwebtoken";
import http from "http";

import { CONFIG, DATE_FORMAT } from "@src/constants/config-global";

import moment from "moment-timezone";
import { UserService } from ".";

export class SocketService {
  private io: Server | null;
  private sockets: Map<string, Socket[]>;
  private connectedUsers: Map<
    string,
    { uid: string; roleCode: string }
  >;

  constructor() {
    this.io = null;
    this.connectedUsers = new Map();
    this.sockets = new Map();
  }

  connected(server: http.Server) {
    this.io = new Server(server, { cors: { origin: "*" } });

    this.io.on("connection", (socket: Socket) => {
      try {
        const token = socket.handshake.query.token as string;
        if (!token) throw new Error("Unauthorized connection");

        const { uid, roleCode } = jwt.verify(
          token,
          CONFIG.JWT_SECRET,
        ) as {
          uid: string;
          roleCode: string;
        };

        if (!uid) throw new Error("Unauthorized");

        if (!this.sockets.has(uid)) this.sockets.set(uid, []);
        this.sockets.get(uid)!.push(socket);
        this.connectedUsers.set(uid, { uid, roleCode });

        this.emitGroup({
          payload: {
            type: "users-connected",
            data: {
              message: "users-connected",
              data: Array.from(this.connectedUsers.values()).map(item => item.uid),
            },
          },
        });

        socket.on("disconnect", async () => {
          const userSockets = this.sockets.get(uid);
          if (userSockets) {
            const index = userSockets.indexOf(socket);
            if (index > -1) userSockets.splice(index, 1);
            if (userSockets.length === 0) {
              this.sockets.delete(uid);
              this.connectedUsers.delete(uid);
            }
          }

          const userService = new UserService();
          await userService.updateUserAndAuth(uid, {
            lastSession: moment().tz(DATE_FORMAT.TIME_ZONE).format(DATE_FORMAT.FULL_DATE)
          })

          this.emitGroup({
            payload: {
              type: "users-connected",
              data: {
                message: "users-connected",
                data: Array.from(this.connectedUsers.values()).map(item => item.uid),
              },
            }
          });
        });
      } catch (error) {
        socket.disconnect(true);
      }
    });
  }

  async emitGroup({ payload, isAdmin }: IGroupEmitParams) {

    // const userService = new UserService();

    // const filteredUsers = currentUser
    //   .filter((user) => user !== null)
    //   .filter((user) => isAdmin ? user.roleCode === "admin" : true)

    // filteredUsers.forEach((user) => this.emit(payload, user.uid));

  }

  emit(payload: IEmitParams, userId: string) {
    const userSockets = this.sockets.get(userId);
    if (userSockets) {
      userSockets.forEach((socket) => socket.emit(payload.type, payload.data));
    }
  }
}
