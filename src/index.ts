import express, { Application, Request, Response } from 'express'; 
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import UserRoutes from './routers/UserRoutes';
import AuthRoutes from './routers/AuthRoutes';

class App{
    // buat variabel global app yg bertipe Application
    public app: Application;
    // list library yg digunakan
    protected plugins(): void{
        // use untuk menggunakan/menerapkan suatu method/middleware/library ke app
        this.app.use(bodyParser.json());
        // gunakan middleware/library morgan di mode development
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }
    // buat routernya
    protected routes(): void{
        // karena didlm class kita pakai this untuk variabel global app diatas
        this.app.route("/").get((req: Request, res: Response)=>{
            res.send("route get ditulis dlm typescript")
        }),
        // gunakan/jlnkan route user yg telah dibuat di file terpisah. 
        // prefixnya users, nama filenya di UserRoutes
        this.app.use("/api/v1/users", UserRoutes)
        this.app.use("/api/v1/auth", AuthRoutes)
    }
    // buat constructor untuk Application agar tipe data Application dpt digunakan
    constructor(){
        this.app = express();
        this.plugins();
        // panggil route yg tlh dibuat diatas
        this.routes();
    }
}
// port yg digunakan
const port: number = 8000;
// karena app dibuat dlm class maka kita perlu memanggil class tsb dan ambil variabel global app
const app = new App().app;
// jlnkan app
app.listen(port, ()=>{
    console.log("tulisan ini dicetak di backend (server) atau terminal, app run on port "+port);
});
