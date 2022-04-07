// import controller (logik)
import TodoController from '../controllers/TodoController';
import BaseRoutes from './BaseRouter';
import { auth } from '../middleware/AuthMiddleware';

// implementasikan IRouter di class TodoRoutes
class TodoRoutes extends BaseRoutes{
    // karena implementasi IRoute maka hrs buat dulu yg diimplementasinya yaitu routes
    public routes(): void {
        this.router.get("/", TodoController.index);
        // hrs login dulu jd gunakan middleware auth
        this.router.post("/", auth, TodoController.create);
        this.router.get("/:id", auth, TodoController.show);
        this.router.put("/:id", auth, TodoController.update)
        this.router.delete("/:id", auth, TodoController.delete)
    };
}
// expose route Todo ini
export default new TodoRoutes().router;