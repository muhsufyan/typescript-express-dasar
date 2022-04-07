// service layer. berisi logik dari controller(app)
import {Request} from "express"
// import db agar dpt terkoneksi ke db
const db = require("../db/models")
class TodoService{
    // deklarasi variabel untuk otentikasi user(siapa yg login)
    credential:{
        // kita perlu id digunakan untuk otentikasi user(siapa yg login)
        id: number
    }
    // deklarasi variabel untuk menangkap data yg diinput user
    body: Request['body'];
    // deklarasi variabel untuk menambil id dari url param
    params: Request['params'];
    // ketika TodoService dijlnkan maka jlnkan constructor ini dengan param/arg berupa request
    constructor(req: Request){
        // jlnkan (assign nilainya ke variabel yg tlh dideklarasikan diatas)
        this.credential = req.app.locals.credential
        this.body = req.body
        this.params = req.params
    }
    // logik ambil semua data todo
    getAll = async () => {
        // ambil semua data di tabel todo
        const data = await db.todo.findAll({
            where:{user_id: this.credential.id},
            // hanya tampilkan id dan deskripsi
            attributes: ['id','description']
        })
        return data
    }
    // simpan data todo
    store = async ()=>{
        // get data description dari input user
        const {description} = this.body;
        // create data dan simpan ke db
        const newtodo = await db.todo.create({
            user_id: this.credential.id,
            description
        })
        return newtodo
    }
    // ambil 1 data
    getOne = async () => {
        const {id} = this.params
        // get data dari db
        const data = await db.todo.findOne({where: {id, user_id: this.credential.id}})
        return data
    }
    // update data dg id
    update = async () => {
        // get id dari url param
        const {id} = this.params
        // tangkap data deskripsi yg baru/diupdate
        const {description} = this.body
        const todo = await db.todo.update({
            description
        },{
            where: {id, user_id: this.credential.id}
        })
        return todo
    }
    // delete data dg id
    delete = async () =>{
        // get id dari url param
        const {id} = this.params
        const todo = await db.todo.destroy({
            where: {id, user_id: this.credential.id}
        })
        return todo
    }
}
export default TodoService;