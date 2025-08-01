import { ClientModel, AuthModel, UserModel } from "@src/models";
import { IAuthAttributes, ClientCreateEditAttributes, AuthType, UserCreateEditAttributes } from "@src/types";
import { ClientService } from "./client.service";
import { AuthService } from "./auth.service";
import { getBCryptCompare } from "@src/helpers";
import { UserService } from "./user.service";

const clientService = new ClientService();
const authService = new AuthService();
const userService = new UserService();

export class ProfileService {
  public async getProfile(authId: string) {
    const auth = await authService.findAuthById(authId);
    if (!auth) throw new Error("Usuario no encontrado");

    if (auth.type === AuthType.CLIENT) {
      const client = await clientService.findClientByAuthId(authId);
      if (!client) throw new Error("Perfil de cliente no encontrado");
      return {
        email: auth.email,
        ...client.get({ plain: true }),
      };
    } else {
      const user = await userService.findUserByAuthId(authId);
      if (!user) throw new Error("Perfil de usuario no encontrado");
      return {
        email: auth.email,
        ...user.get({ plain: true }),
      };
    }
  }

  public async getProfileByEmail(email: string) {
    const auth = await authService.findAuthByEmail(email);
    if (!auth) throw new Error("Usuario no encontrado");

    if (auth.type === AuthType.CLIENT) {
      const client = await clientService.findClientByAuthId(auth.id);
      if (!client) throw new Error("Perfil de cliente no encontrado");
      return {
        email: auth.email,
        ...client.get({ plain: true }),
      };
    } else {
      const user = await userService.findUserByAuthId(auth.id);
      if (!user) throw new Error("Perfil de usuario no encontrado");
      return {
        email: auth.email,
        ...user.get({ plain: true }),
      };
    }
  }

  public async updateProfileByEmail(
    email: string,
    data: Partial<ClientCreateEditAttributes | UserCreateEditAttributes>
  ) {
    const auth = await authService.findAuthByEmail(email);
    if (!auth) throw new Error("Usuario no encontrado");

    if (auth.type === AuthType.CLIENT) {
      const { fk_client_id } = auth;
      if (!fk_client_id) throw new Error("Cliente no encontrado");
      await ClientModel.update(data, { where: { id: fk_client_id } });
      return await clientService.findClientByAuthId(auth.id);
    } else {
      const { fk_user_id } = auth;
      if (!fk_user_id) throw new Error("Usuario no encontrado");
      await UserModel.update(data, { where: { id: fk_user_id } });
      return await userService.findUserByAuthId(auth.id);
    }
  }

  public async changePassword(
    authId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    const auth = await authService.findAuthById(authId);
    if (!auth) throw new Error("Usuario no encontrado");

    if (!auth.password) throw new Error("El usuario no tiene una contraseña asignada");

    const isMatch = getBCryptCompare(oldPassword, auth.password);
    if (!isMatch) throw new Error("La contraseña actual es incorrecta");

    await authService.updateAuth(authId, {
      password: newPassword,
    });
  }
}
