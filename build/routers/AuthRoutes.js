"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const AuthValidator_1 = __importDefault(require("../middleware/AuthValidator"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class AuthRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/login", AuthValidator_1.default, AuthController_1.default.login);
        // data akan divalidasi dulu jika lolos maka akan dilanjutkan ke AuthController
        this.router.post("/register", AuthValidator_1.default, AuthController_1.default.register);
        // get user profile
        this.router.get("/profile", AuthMiddleware_1.auth, AuthController_1.default.profile);
    }
    ;
}
exports.default = new AuthRoutes().router;
