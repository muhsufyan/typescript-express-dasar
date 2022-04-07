"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
const AuthRoutes_1 = __importDefault(require("./routers/AuthRoutes"));
const dotenv_1 = require("dotenv");
const TodoRoutes_1 = __importDefault(require("./routers/TodoRoutes"));
class App {
    // buat constructor untuk Application agar tipe data Application dpt digunakan
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        // panggil route yg tlh dibuat diatas
        this.routes();
        // panggil dotenv, jika tdk dipanggil maka akan bernilai undefined
        (0, dotenv_1.config)();
    }
    // list library yg digunakan
    plugins() {
        // use untuk menggunakan/menerapkan suatu library ke app
        this.app.use(body_parser_1.default.json());
        // gunakan library
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    // buat routernya
    routes() {
        // karena didlm class kita pakai this untuk variabel global app diatas
        this.app.route("/").get((req, res) => {
            res.send("route get ditulis dlm typescript");
        }),
            // route terpisah
            this.app.use("/api/v1/users", UserRoutes_1.default);
        this.app.use("/api/v1/auth", AuthRoutes_1.default);
        // route untuk todo
        this.app.use("/api/v1/todos", TodoRoutes_1.default);
    }
}
// port yg digunakan
const port = 8000;
// karena app dibuat dlm class maka kita perlu memanggil class tsb dan ambil variabel global app
const app = new App().app;
// jlnkan app
app.listen(port, () => {
    console.log("tulisan ini dicetak di backend (server) atau terminal, app run on port " + process.env.APP_PORT);
    console.log(process.env.DB_HOST);
});
