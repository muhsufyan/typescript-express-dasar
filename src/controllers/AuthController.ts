import {Request, Response} from 'express';
import PasswordHash from '../utils/PasswordHash';
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
    login(req: Request, res: Response): Response {
        return res.send(req.body);
    }
}

export default new AuthController();