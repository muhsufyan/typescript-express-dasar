// import controller (logik)
import TodoController from '../controllers/TodoController';
import BaseRoutes from './BaseRouter';
import { auth } from '../middleware/AuthMiddleware';
import todovalidate from '../middleware/TodoValidator';
// implementasikan IRouter di class TodoRoutes
class TodoRoutes extends BaseRoutes{
    // karena implementasi IRoute maka hrs buat dulu yg diimplementasinya yaitu routes
    public routes(): void {
        // tampilkan hanya todo yg dibuat oleh si user 
        this.router.get("/", auth, TodoController.index);
        // hrs login dulu jd gunakan middleware auth lalu data akan divalidasi jika valid akan dibuat data barunya
        this.router.post("/", auth, todovalidate, TodoController.create);
        this.router.get("/:id", auth, TodoController.show);
        this.router.put("/:id", auth, todovalidate, TodoController.update)
        this.router.delete("/:id", auth, TodoController.delete)
    };
}
// expose route Todo ini
export default new TodoRoutes().router;