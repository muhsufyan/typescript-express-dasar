import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any =>{
    console.log("ini middleware, misal mengecek");

    let auth = true;
    // auth = true maka jlnkan next
    if (auth){
        next();
    }
    // auth false 
    return res.send(("belum login"))
    
}