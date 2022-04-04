import express, { Application, Request, Response } from 'express'; 
import bodyParser from 'body-parser';
class App{
    // buat variabel global app yg bertipe Application
    public app: Application;
    // convert jd json dg body parser
    protected plugins(): void{
        // use untuk menggunakan/menerapkan suatu method/middleware/library ke app
        this.app.use(bodyParser.json());
    }
    // buat routernya
    protected routes(): void{
        // karena didlm class kita pakai this untuk variabel global app diatas
        this.app.route("/").get((req: Request, res: Response)=>{
            res.send("route get ditulis dlm typescript")
        }),
        // melihat param req pada post
        this.app.route("/").post((req: Request, res: Response)=>{
            // cetak param yg dikirim client
            res.send(req.body)
        })
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
