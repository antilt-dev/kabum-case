import * as jwt from "jsonwebtoken"

export class Authenticator {
    public generateToken(payload:string) {
      return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    }
  
    public verifyToken(token:string) {
      return jwt.verify(token, process.env.JWT_SECRET as string);
    }
  }