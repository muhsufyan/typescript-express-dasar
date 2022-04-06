import jwt from "jsonwebtoken";
class TokenJwt{
    // membuat token. payload/data yg dikirim adlh id, username, password dan returnnya adlh token maka bertipe string
    public static generateToken=(id: number, username: string, password: string): string => {
        const secretKey:string = process.env.JWT_SECRET_KEY || "ini harusnya random" 
        // buat token. untuk generate token sign
        const token: string = jwt.sign({id, username, password}, secretKey)
        return token 
    }
}

export default TokenJwt;