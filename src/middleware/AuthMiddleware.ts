import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction): any =>{
    if (!req.headers.authorization){
        return res.status(401).send("unauthenticated")
    }
    let secretKey = process.env.JWT_SECRET_KEY || "secret default";
    // get token di req header & menggunakan bearer jd split. karena format header Authorization adlh Bearer token 
    const token: string = req.headers.authorization.split("Bearer ")[1];
    try {
        // verifikasi token (valid/tdk)
        const credential: string | object = jwt.verify(token, secretKey);
        if(credential){
            // simpan data credential di local, sehingga semua method di controller dpt mengaksesnya (get datanya/payload) 
            req.app.locals.credential = credential;
            return next()
        }
        // token invalid
        return res.status(401).send("token invalid")
    } catch (error) {
        return res.send(error)
    }
}