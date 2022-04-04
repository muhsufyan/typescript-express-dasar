import {Request, Response} from 'express';
// buat interface 
interface IController{
    // biasanya dlm endpoint ada 5 method
    // show all data. paramnya req, res dan returnnya Response
    index(req: Request, res: Response): Response;
    create(req: Request, res: Response): Response;
    // show 1 data
    show(req: Request, res: Response): Response;
    update(req: Request, res: Response): Response;
    delete(req: Request, res: Response): Response;
}

export default IController;