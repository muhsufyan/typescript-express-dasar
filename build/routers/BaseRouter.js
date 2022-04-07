"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// buat abstract class. nanti turunan dari class ini ga boleh langsung instansiasi class ini, hrs lewat class turunannya dulu
class BaseRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        // method routes dari implement interface
        this.routes();
    }
}
exports.default = BaseRoutes;
