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
Object.defineProperty(exports, "__esModule", { value: true });
// import db agar dpt terkoneksi ke db
const db = require("../db/models");
class TodoService {
    // ketika TodoService dijlnkan maka jlnkan constructor ini dengan param/arg berupa request
    constructor(req) {
        // logik ambil semua data todo
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            // ambil semua data di tabel todo
            const data = yield db.todo.findAll({
                where: { user_id: this.credential.id },
                // hanya tampilkan id dan deskripsi
                attributes: ['id', 'description']
            });
            return data;
        });
        // simpan data todo
        this.store = () => __awaiter(this, void 0, void 0, function* () {
            // get data description dari input user
            const { description } = this.body;
            // create data dan simpan ke db
            const newtodo = yield db.todo.create({
                user_id: this.credential.id,
                description
            });
            return newtodo;
        });
        // ambil 1 data
        this.getOne = () => __awaiter(this, void 0, void 0, function* () {
            const { id } = this.params;
            // get data dari db
            const data = yield db.todo.findOne({ where: { id, user_id: this.credential.id } });
            return data;
        });
        // update data dg id
        this.update = () => __awaiter(this, void 0, void 0, function* () {
            // get id dari url param
            const { id } = this.params;
            // tangkap data deskripsi yg baru/diupdate
            const { description } = this.body;
            const todo = yield db.todo.update({
                description
            }, {
                where: { id, user_id: this.credential.id }
            });
            return todo;
        });
        // delete data dg id
        this.delete = () => __awaiter(this, void 0, void 0, function* () {
            // get id dari url param
            const { id } = this.params;
            const todo = yield db.todo.destroy({
                where: { id, user_id: this.credential.id }
            });
            return todo;
        });
        // jlnkan (assign nilainya ke variabel yg tlh dideklarasikan diatas)
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }
}
exports.default = TodoService;
