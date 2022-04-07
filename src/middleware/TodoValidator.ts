import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

// validasi data
const todovalidate = [
    // data masuk dicek dulu
    check('description').isString(),
    (req: Request, res: Response, next: NextFunction)=>{
        // cek dulu jika ada error
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(500).send({errors: errors.array()})
        }
        // jika tdk ada error lanjutkan ke controller selanjutnya
        return next()
    }

]
export default todovalidate;