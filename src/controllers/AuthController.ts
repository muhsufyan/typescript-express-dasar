import {Request, Response} from 'express';
import PasswordHash from '../utils/PasswordHash';
import TokenJwt from '../utils/tokenjwt';
// js biasa
const db = require("../db/models");
class AuthController {
    // sequelize itu asynchronous, maka perlu async dan returnnya Promise dg generic Response
    register = async (req: Request, res: Response): Promise<Response> => {
    //    get adata
        let {username, password} =req.body
        // password yg tlh di hash, bcypt adlh asynchronous
        const hashedPassword: string = await PasswordHash.hash(password); 
        // user dari db/models/user.js
        const createdUser = await db.user.create({
            // username: username, password: password
            // karena sama maka kita singkat jd
            username, password:hashedPassword
        })
        return res.send(createdUser)
    }
    login = async (req: Request, res: Response): Promise<Response> => {
        // tangkap data input
        let {username, password} = req.body
        // 1 cari data user by username
        const user = await db.user.findOne({
            where: {username}
        })
        // return res.send(user) untuk debug tahap 1
        // 2 cek password (apakah == di db)
        // ada user
        if (user){
            let compare = await PasswordHash.passwordCompare(password, user.password)
            // return res.send(compare) untuk debug tahap 2
        // }
        // user tdk ada
        // return res.send("user tidak ditemukan") untuk debug tahap 2
        // 3 generate password
        // jika passwordnya sama
        if (compare){
            // buat token
            let token = await TokenJwt.generateToken(user.id, username, user.password)
            return res.send({token})
        }
    }
    // jika passwordnya tdk sama/salah
    return res.send("auth is failed")
    }
    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.credential)
    }
}

export default new AuthController();