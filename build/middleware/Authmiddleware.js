"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthenticated");
    }
    let secretKey = process.env.JWT_SECRET_KEY || "secret default";
    // get token di req header & menggunakan bearer jd split. karena format header Authorization adlh Bearer token 
    const token = req.headers.authorization.split("Bearer ")[1];
    try {
        // verifikasi token (valid/tdk)
        const credential = jsonwebtoken_1.default.verify(token, secretKey);
        if (credential) {
            // simpan data credential di local, sehingga semua method di controller dpt mengaksesnya (get datanya/payload) 
            req.app.locals.credential = credential;
            return next();
        }
        // token invalid
        return res.status(401).send("token invalid");
    }
    catch (error) {
        return res.send(error);
    }
};
exports.auth = auth;
