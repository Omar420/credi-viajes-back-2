import jwt from "jsonwebtoken";
import { CONFIG } from "@src/constants/config-global";

export function generatorJWT({
  payload,
  expiresIn,
}: {
  payload: Record<string, any>;
  expiresIn?: string | number;
}): Promise<string> {
  return new Promise((resolve, reject) => {
    const exp = (expiresIn ?? CONFIG.EXPIRATED_LAPSE_TIME) as jwt.SignOptions["expiresIn"];

    jwt.sign(
      payload,
      CONFIG.JWT_SECRET,
      {
        expiresIn: exp,
      },
      (err, token) => {
        if (err || !token) {
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
}
