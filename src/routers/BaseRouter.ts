import {Router, Request, Response} from 'express';
import IRouter from './RouteInterface';

// buat abstract class. nanti turunan dari class ini ga boleh langsung instansiasi class ini, hrs lewat class turunannya dulu
abstract class BaseRoutes implements IRouter{
    public router: Router;
    constructor(){
        this.router = Router();
        // method routes dari implement interface
        this.routes();
    }
    // class yg meng-extends abstract class BaseRoutes harus memiliki method routes
    abstract routes(): void;
}
export default BaseRoutes;