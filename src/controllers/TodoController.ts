// ini akan berhub ke db jd akan berbentuk Promise (asynchronous, returnnya hrs Promise), sehingga interface controller hrs diubah
import {Request, Response} from 'express';
// import interface nya
import IController from './ControllerInterface';


class TodoController implements IController{
    index(req: Request, res: Response): Response {
       return res.send("index");
    }
    create(req: Request, res: Response): Response {
        return res.send("create");
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