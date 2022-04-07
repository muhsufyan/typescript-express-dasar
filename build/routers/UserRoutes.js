"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import controller (logik)
const UserController_1 = __importDefault(require("../controllers/UserController"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const middlewareBasic_1 = require("../middleware/middlewareBasic");
// implementasikan IRouter di class UserRoutes
class UserRoutes extends BaseRouter_1.default {
    // karena implementasi IRoute maka hrs buat dulu yg diimplementasinya yaitu routes
    routes() {
        this.router.get("/", UserController_1.default.index);
        // auth adlh middleware stlh console diatas dijlnkan maka selanjutnya akan menjlnkan UserController.index
        this.router.post("/", middlewareBasic_1.auth, UserController_1.default.create);
        this.router.get("/:id", UserController_1.default.show);
        this.router.put("/:id", UserController_1.default.update);
        this.router.delete("/:id", UserController_1.default.delete);
    }
    ;
}
// expose route user ini
exports.default = new UserRoutes().router;
