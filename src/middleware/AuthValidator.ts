// validasi register
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

// validasi data
const validate = [
    // data masuk dicek dulu
    // apakah ada username dg tipe string
    check('username').isString(),
    check('password').isLength({min:6}),
    (req: Request, res: Response, next: NextFunction)=>{
        // cek dulu jika ada error
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(500).send({errors: errors.array()})
        }
        // jika tdk ada error lanjutkan ke controller selanjutnya
        next()
    }

]
export default validate;