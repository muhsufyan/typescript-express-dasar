import {Request, Response} from 'express';
// import interface nya
import IController from './ControllerInterface';

// buat dummy data berupa array
let data: any[] = [
    {id : 1, name: "dummy 1"},
    {id : 2, name: "dummy 2"},
    {id : 3, name: "dummy 3"},
    {id : 4, name: "dummy 4"},
    {id : 5, name: "dummy 5"},
]
class UserController implements IController{
    index(req: Request, res: Response): Response {
       return res.send(data);
    }
    create(req: Request, res: Response): Response {
        // ambil property id & name.
        const {id, name} = req.body;
        // push data baru kedlm array
        data.push({
            // id: id,
            // name: name
            // karena sama maka kita dpt singkat jd
            id,name
        });
        return res.send("data berhasil disimpan");
    }
    show(req: Request, res: Response): Response {
        // id diambil dari url param.
       const {id} = req.params;
        //    ambil data dg id yg dicari
       let data_cari = data.find(item => item.id == id);
       return res.send(data_cari)
    }
    update(req: Request, res: Response): Response {
        // id diambil dari url param.
        const {id} = req.params;
        // data baru
        const {name} = req.body;
        //    ambil data dg id yg dicari
       let data_cari = data.find(item => item.id == id);
        // ubah data lama dg data baru
        data_cari.name = name;
        return res.send("update berhasil");
    }
    delete(req: Request, res: Response): Response {
        // id diambil dari url param.
        const {id} = req.params;
        // karena ini hanya percobaan kita filter saja id yg ditampilkan itu id yg tdk termasuk (tdk bnr" menghapusnya)
        let dataset = data.filter(item => item.id != id);
        return res.send(dataset)
    }
    
}

export default new UserController();