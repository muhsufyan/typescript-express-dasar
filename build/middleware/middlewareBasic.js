"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    console.log("ini middleware, misal mengecek");
    let auth = true;
    // auth = true maka jlnkan next
    if (auth) {
        next();
    }
    // auth false 
    return res.send(("belum login"));
};
exports.auth = auth;
