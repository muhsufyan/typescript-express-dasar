"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import controller (logik)
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
const TodoValidator_1 = __importDefault(require("../middleware/TodoValidator"));
// implementasikan IRouter di class TodoRoutes
class TodoRoutes extends BaseRouter_1.default {
    // karena implementasi IRoute maka hrs buat dulu yg diimplementasinya yaitu routes
    routes() {
        // tampilkan hanya todo yg dibuat oleh si user 
        this.router.get("/", AuthMiddleware_1.auth, TodoController_1.default.index);
        // hrs login dulu jd gunakan middleware auth lalu data akan divalidasi jika valid akan dibuat data barunya
        this.router.post("/", AuthMiddleware_1.auth, TodoValidator_1.default, TodoController_1.default.create);
        this.router.get("/:id", AuthMiddleware_1.auth, TodoController_1.default.show);
        this.router.put("/:id", AuthMiddleware_1.auth, TodoValidator_1.default, TodoController_1.default.update);
        this.router.delete("/:id", AuthMiddleware_1.auth, TodoController_1.default.delete);
    }
    ;
}
// expose route Todo ini
exports.default = new TodoRoutes().router;
