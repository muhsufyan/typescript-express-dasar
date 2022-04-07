// ini akan berhub ke db jd akan berbentuk Promise (asynchronous, returnnya hrs Promise), sehingga interface controller hrs diubah
import {Request, Response} from 'express';
import todo from '../db/models/todo';
// import interface nya
import IController from './ControllerInterface';
// import db agar dpt terkoneksi ke db
const db = require("../db/models")

class TodoController implements IController{
    index = async (req: Request, res: Response): Promise<Response> => {
        // get id user yg melakukan create todo
        const {id} = req.app.locals.credential;
        // ambil semua data di tabel todo
        const data = await db.todo.findAll({
            where:{user_id: id},
            // hanya tampilkan id dan deskripsi
            attributes: ['id','description']
        })
       return res.send({
           data
       });
    }
    // sequelize asynchronous jd hrs promise async await
    create = async (req: Request, res: Response): Promise<Response> => {
        // get id user yg login
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
    show = async (req: Request, res: Response): Promise<Response> => {
        // get id user yg login & simpan sebagai user_id
        const {id: user_id} = req.app.locals.credential;
        // get id dari url param
        const {id} = req.params
        // get data dari db
        const data = await db.todo.findOne({where: {id, user_id}})
       return res.send({data: data}) 
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        // get id user yg login & simpan sebagai user_id
        const {id: user_id} = req.app.locals.credential;
        // get id dari url param
        const {id} = req.params
        // tangkap data deskripsi yg baru/diupdate
        const {description} = req.body
        await db.todo.update({
            description
        },{
            where: {id, user_id}
        })
        return res.send({message:"data updated"});
    }
    delete = async (req: Request, res: Response): Promise<Response> => {
        // get id user yg login & simpan sebagai user_id
        const {id: user_id} = req.app.locals.credential;
        // get id dari url param
        const {id} = req.params
        await db.todo.destroy({
            where: {id, user_id}
        })
        return res.send({message:"data deleted"})
    }
    
}

export default new TodoController();