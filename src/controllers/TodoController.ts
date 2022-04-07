// ini akan berhub ke db jd akan berbentuk Promise (asynchronous, returnnya hrs Promise), sehingga interface controller hrs diubah
import {Request, Response} from 'express';
import todo from '../db/models/todo';
// import interface nya
import IController from './ControllerInterface';
// service
import TodoService from '../services/TodoService';

class TodoController implements IController{
    index = async (req: Request, res: Response): Promise<Response> => {
        // berikan req ke TodoService (as param/argument)
        const service: TodoService = new TodoService(req)
        // get semua data dari db 
        const data = await service.getAll()
       return res.send({
           data
       });
    }
    // sequelize asynchronous jd hrs promise async await
    create = async (req: Request, res: Response): Promise<Response> => {
       // berikan req ke TodoService (as param/argument)
       const service: TodoService = new TodoService(req)
       // simpan data baru dari db 
       const newtodo = await service.store()
        return res.send({
            data: newtodo,
            message: "success created"
        });
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        // berikan req ke TodoService (as param/argument)
        const service: TodoService = new TodoService(req)
        // get 1 data dari db 
        const data = await service.getOne()
       return res.send({data: data}) 
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        // berikan req ke TodoService (as param/argument)
        const service: TodoService = new TodoService(req)
        // update data dg id dari db 
        const data = await service.update()
        return res.send({data, message:"data updated"});
    }
    delete = async (req: Request, res: Response): Promise<Response> => {
        // berikan req ke TodoService (as param/argument)
        const service: TodoService = new TodoService(req)
        // hapus data dg id dari db 
        const data = await service.delete()
        return res.send({data, message:"data deleted"})
    }
    
}

export default new TodoController();