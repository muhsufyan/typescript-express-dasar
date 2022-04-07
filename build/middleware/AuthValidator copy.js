"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
// validasi data
const validate = [
    // data masuk dicek dulu
    // apakah ada username dg tipe string
    (0, express_validator_1.check)('username').isString(),
    (0, express_validator_1.check)('password').isLength({ min: 6 }),
    (req, res, next) => {
        // cek dulu jika ada error
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(500).send({ errors: errors.array() });
        }
        // jika tdk ada error lanjutkan ke controller selanjutnya
        next();
    }
];
exports.default = validate;
