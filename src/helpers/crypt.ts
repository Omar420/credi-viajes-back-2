import bcrypt from "bcryptjs";

export function encryptData(value: string) {
  const salt = bcrypt.genSaltSync();

  return bcrypt.hashSync(value, salt);
}

export function getBCryptCompare(value: string, hash: string) {
  return bcrypt.compareSync(value, hash);
}
