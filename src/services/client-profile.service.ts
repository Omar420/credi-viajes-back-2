import { ClientModel } from "@src/models";
import { ClientCreateEditAttributes } from "@src/types";
import { AuthService } from "./auth.service";
import { ClientService } from "./client.service";

const authService = new AuthService();
const clientService = new ClientService();

export class ClientProfileService {
  public async getProfileByEmail(email: string) {
    const auth = await authService.findAuthByEmail(email);
    if (!auth || auth.type !== 'client') throw new Error("Cliente no encontrado");

    const client = await clientService.findClientByAuthId(auth.id);
    if (!client) throw new Error("Perfil de cliente no encontrado");

    return {
      email: auth.email,
      ...client.get({ plain: true }),
    };
  }

  public async updateProfileByEmail(
    email: string,
    data: Partial<ClientCreateEditAttributes>
  ) {
    const auth = await authService.findAuthByEmail(email);
    if (!auth || auth.type !== 'client') throw new Error("Cliente no encontrado");

    const { fk_client_id } = auth;
    if (!fk_client_id) throw new Error("Cliente no encontrado");

    await ClientModel.update(data, { where: { id: fk_client_id } });
    return await clientService.findClientByAuthId(auth.id);
  }
}
