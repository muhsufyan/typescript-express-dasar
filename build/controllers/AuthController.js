"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PasswordHash_1 = __importDefault(require("../utils/PasswordHash"));
const tokenjwt_1 = __importDefault(require("../utils/tokenjwt"));
// js biasa
const db = require("../db/models");
class AuthController {
    constructor() {
        // sequelize itu asynchronous, maka perlu async dan returnnya Promise dg generic Response
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //    get adata
            let { username, password } = req.body;
            // password yg tlh di hash, bcypt adlh asynchronous
            const hashedPassword = yield PasswordHash_1.default.hash(password);
            // user dari db/models/user.js
            const createdUser = yield db.user.create({
                // username: username, password: password
                // karena sama maka kita singkat jd
                username, password: hashedPassword
            });
            return res.send(createdUser);
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // tangkap data input
            let { username, password } = req.body;
            // 1 cari data user by username
            const user = yield db.user.findOne({
                where: { username }
            });
            // return res.send(user) untuk debug tahap 1
            // 2 cek password (apakah == di db)
            // ada user
            if (user) {
                let compare = yield PasswordHash_1.default.passwordCompare(password, user.password);
                // return res.send(compare) untuk debug tahap 2
                // }
                // user tdk ada
                // return res.send("user tidak ditemukan") untuk debug tahap 2
                // 3 generate password
                // jika passwordnya sama
                if (compare) {
                    // buat token
                    let token = yield tokenjwt_1.default.generateToken(user.id, username, user.password);
                    return res.send({ token });
                }
            }
            // jika passwordnya tdk sama/salah
            return res.send("auth is failed");
        });
        this.profile = (req, res) => {
            return res.send(req.app.locals.credential);
        };
    }
}
exports.default = new AuthController();
