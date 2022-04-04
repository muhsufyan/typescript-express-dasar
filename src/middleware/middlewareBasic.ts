import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any =>{
    console.log("ini middleware, misal mengecek");
    // lalu jlnkan func next(); yg mrpkn fungsi selanjutnya misal liat pd post user. stlh console diatas dijlnkan maka selanjutnya
    // akan menjlnkan UserController.index 
    // jika next() dibwh dihapus maka UserController.index tdk akan dijlnkan (berhenti di console diatas)
    // next();
    // fungsi ini adlh auth sederhana
    let auth = true;
    // auth = true maka jlnkan next
    if (auth){
        next();
    }
    // auth false 
    return res.send(("belum login"))
    
}