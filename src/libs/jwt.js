import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export function createAccesToken(payload) {
  return new Promise((resolve, reject) => { //new Promise es un objeto global de NODE
        jwt.sign(   // sign es un metodo de jsonwebtoken que nos permite crear un token de usuario
            payload, // payload es la informacion que queremos guardar en el token
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => { // callback
                if (err) reject(err)
                resolve(token)
            }
        );
    });
}
