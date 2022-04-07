"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
// validasi data
const todovalidate = [
    // data masuk dicek dulu
    (0, express_validator_1.check)('description').isString(),
    (req, res, next) => {
        // cek dulu jika ada error
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(500).send({ errors: errors.array() });
        }
        // jika tdk ada error lanjutkan ke controller selanjutnya
        return next();
    }
];
exports.default = todovalidate;
