import { ROLES } from "@src/constants/config-global";
import {
  UserService,
  RoleService
} from "@src/services";


export async function checkExistenceEmail(email: string) {
  const userService = new UserService();
  const foundUser = await userService.findUserByEmail(email);

  if (foundUser) {
    throw new Error("El Correo electrónico ya se encuentra registrado");
  }

  return true;
}

export async function checkExistenceUsername(username: string) {
  const userService = new UserService();
  const foundUser = await userService.findUserByUsername(username);

  if (foundUser) {
    throw new Error("El nombre de usuario no está disponible");
  }

  return true;
}

export async function checkExistenceUserById(userId: string) {
  const userService = new UserService();
  const foundUser = await userService.findUserById(userId)

  if (!foundUser) {
    throw new Error("El usuario no se encuentra registrado");
  }

  return true;
}

export async function checkExistenceRoleId(roleId: string) {
  const roleService = new RoleService();
  const foundRole = await roleService.findRoleById(roleId);

  if (!foundRole) {
    throw new Error("El Rol no se encuentra registrado");
  }

  return true;
}
