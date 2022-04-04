// CARA LAMA MENGGUNAKAN JS
// import express from 'express'
// const app = express();
// app.route("/").get((response,request)=>{
//     response.send("halo");
// });

// app.listen(8000);
// CARA 2 DENGAN TYPESCRIPT
// interface dr express
import express, { Application, Request, Response } from 'express'; 
class App{
    // buat variabel global app yg bertipe Application
    public app: Application;
    // buat routernya
    protected routes(): void{
        // karena didlm class kita pakai this untuk variabel global app diatas
        this.app.route("/").get((req: Request, res: Response)=>{
            res.send("route ini ditulis dengan typescript")
        })
    }
    // buat constructor untuk Application agar tipe data Application dpt digunakan
    constructor(){
        this.app = express();
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
