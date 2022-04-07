// ini akan berhub ke db jd akan berbentuk Promise (asynchronous, returnnya hrs Promise), sehingga interface controller hrs diubah
import {Request, Response} from 'express';
import todo from '../db/models/todo';
// import interface nya
import IController from './ControllerInterface';
// import db agar dpt terkoneksi ke db
const db = require("../db/models")

class TodoController implements IController{
    index(req: Request, res: Response): Response {
       return res.send("index");
    }
    // sequelize asynchronous jd hrs promise async await
    create = async (req: Request, res: Response): Promise<Response> => {
        // get id user yg melakukan create todo
        const {id} = req.app.locals.credential;
        // get data description dari input user
        const {description} = req.body;
        // create data dan simpan ke db
        const newtodo = await db.todo.create({
            user_id: id,
            description
        })
        return res.send({
            data: newtodo,
            message: "success created"
        });
    }
    show(req: Request, res: Response): Response {
       return res.send("show 1 id")
    }
    update(req: Request, res: Response): Response {
        return res.send("update");
    }
    delete(req: Request, res: Response): Response {
        return res.send("delete")
    }
    
}

export default new TodoController();