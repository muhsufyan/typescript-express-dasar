"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenJwt {
}
// membuat token. payload/data yg dikirim adlh id, username, password dan returnnya adlh token maka bertipe string
TokenJwt.generateToken = (id, username, password) => {
    const secretKey = process.env.JWT_SECRET_KEY || "ini harusnya random";
    // buat token. untuk generate token sign
    const token = jsonwebtoken_1.default.sign({ id, username, password }, secretKey);
    return token;
};
exports.default = TokenJwt;
