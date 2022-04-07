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
// service
const TodoService_1 = __importDefault(require("../services/TodoService"));
class TodoController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // berikan req ke TodoService (as param/argument)
            const service = new TodoService_1.default(req);
            // get semua data dari db 
            const data = yield service.getAll();
            return res.send({
                data
            });
        });
        // sequelize asynchronous jd hrs promise async await
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // berikan req ke TodoService (as param/argument)
            const service = new TodoService_1.default(req);
            // simpan data baru dari db 
            const newtodo = yield service.store();
            return res.send({
                data: newtodo,
                message: "success created"
            });
        });
        this.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // berikan req ke TodoService (as param/argument)
            const service = new TodoService_1.default(req);
            // get 1 data dari db 
            const data = yield service.getOne();
            return res.send({ data: data });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // berikan req ke TodoService (as param/argument)
            const service = new TodoService_1.default(req);
            // update data dg id dari db 
            const data = yield service.update();
            return res.send({ data, message: "data updated" });
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // berikan req ke TodoService (as param/argument)
            const service = new TodoService_1.default(req);
            // hapus data dg id dari db 
            const data = yield service.delete();
            return res.send({ data, message: "data deleted" });
        });
    }
}
exports.default = new TodoController();
