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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
// sbnrnya bisa juga dg function tp kita pakai konsep oop jd class
class PasswordHash {
}
_a = PasswordHash;
// static agar kita tdk perlu buat objek lagi dan hash memang fungsi hash ini static
PasswordHash.hash = (password) => {
    // salt nya kita set 10 round
    return bcrypt_1.default.hash(password, 10);
};
// dekripsi/decode (untuk cek password apakah sama/tdk jd return boolean)
PasswordHash.passwordCompare = (inputDataPassword, encryptedPasswordDb) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield bcrypt_1.default.compare(inputDataPassword, encryptedPasswordDb);
    return result;
});
exports.default = PasswordHash;
