import * as bcrypt from "bcryptjs"

export class HashManager {
    public async hash(plainText:string) {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(plainText, salt);
  
      return hashedPassword;
    }
  
    public async compare(plainText:string, hashedPassword:string) {
      return bcrypt.compare(plainText, hashedPassword);
    }
  }