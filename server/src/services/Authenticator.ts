import * as jwt from "jsonwebtoken"

export class Authenticator {
    public generateToken(id:string) {
      return jwt.sign({id}, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    }
  
    public verifyToken(token:string) {
      return jwt.verify(token, process.env.JWT_SECRET as string);
    }
  }