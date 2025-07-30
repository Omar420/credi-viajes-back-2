import { ClientModel, AuthModel } from "@src/models";
import { IAuthAttributes, ClientCreateEditAttributes } from "@src/types";
import { ClientService } from "./client.service";
import { AuthService } from "./auth.service";
import bcrypt from "bcrypt";

const clientService = new ClientService();
const authService = new AuthService();

export class ProfileService {
  public async getProfile(authId: string) {
    const auth = await authService.findAuthById(authId);
    if (!auth) throw new Error("Usuario no encontrado");

    const client = await clientService.findClientByAuthId(authId);
    if (!client) throw new Error("Perfil no encontrado");

    return {
      email: auth.email,
      ...client.get({ plain: true }),
    };
  }

  public async updateProfile(
    authId: string,
    data: ClientCreateEditAttributes
  ) {
    const { fk_client_id } = (await authService.findAuthById(authId)) || {};
    if (!fk_client_id) throw new Error("Cliente no encontrado");

    await ClientModel.update(data, { where: { id: fk_client_id } });
    return await clientService.findClientByAuthId(authId);
  }

  public async changePassword(
    authId: string,
    oldPassword,
    newPassword
  ): Promise<void> {
    const auth = await authService.findAuthById(authId);
    if (!auth) throw new Error("Usuario no encontrado");

    const isMatch = await bcrypt.compare(oldPassword, auth.password);
    if (!isMatch) throw new Error("La contraseña actual es incorrecta");

    await authService.updateAuthById(authId, {
      password: newPassword,
    });
  }
}
