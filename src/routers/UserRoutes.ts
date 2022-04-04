import {Router, Request, Response} from 'express';
// import interface yg tlh dibuat
import IRouter from './RouteInterface';
// import controller (logik)
import UserController from '../controllers/UserController';

// implementasikan IRouter di class UserRoutes
class UserRoutes implements IRouter{
    // buat properti dg nama router bertipe Router experssjs
    public router: Router;
    // ini sprti file main dlm suatu class (__init__)
    constructor(){
        this.router = Router();
        // method routes dari implement interface
        this.routes();
    }
    // karena implementasi IRoute maka hrs buat dulu yg diimplementasinya yaitu routes
    public routes(): void {
        this.router.get("/", UserController.index);
        this.router.post("/", UserController.create);
    };
}
// expose route user ini
export default new UserRoutes().router;