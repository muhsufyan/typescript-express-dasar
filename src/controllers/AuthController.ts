import {Request, Response} from 'express';

class AuthController {
    index(req: Request, res: Response): Response {
       return res.send("halo");
    }
    create(req: Request, res: Response): Response {
        return res.send(req.body);
    }
}

export default new AuthController();