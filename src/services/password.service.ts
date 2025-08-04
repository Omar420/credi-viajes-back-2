import { AuthService } from "./auth.service";
import { getBCryptCompare } from "@src/helpers";

const authService = new AuthService();

export class PasswordService {
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
