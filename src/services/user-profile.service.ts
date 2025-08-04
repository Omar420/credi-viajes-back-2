import { UserModel } from "@src/models";
import { UserCreateEditAttributes } from "@src/types";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

const authService = new AuthService();
const userService = new UserService();

export class UserProfileService {
  public async getProfileByEmail(email: string) {
    const auth = await authService.findAuthByEmail(email);
    if (!auth || auth.type !== 'user') throw new Error("Usuario no encontrado");

    const user = await userService.findUserById(auth.fk_user_id!);
    if (!user) throw new Error("Perfil de usuario no encontrado");

    return {
      email: auth.email,
      ...user,
    };
  }

  public async updateProfileByEmail(
    email: string,
    data: Partial<UserCreateEditAttributes>
  ) {
    const auth = await authService.findAuthByEmail(email);
    if (!auth || auth.type !== 'user') throw new Error("Usuario no encontrado");

    const { fk_user_id } = auth;
    if (!fk_user_id) throw new Error("Usuario no encontrado");

    await UserModel.update(data, { where: { id: fk_user_id } });
    return await userService.findUserById(fk_user_id);
  }
}
