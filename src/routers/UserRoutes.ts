// import controller (logik)
import UserController from '../controllers/UserController';
import BaseRoutes from './BaseRouter';

// implementasikan IRouter di class UserRoutes
class UserRoutes extends BaseRoutes{
    // karena implementasi IRoute maka hrs buat dulu yg diimplementasinya yaitu routes
    public routes(): void {
        this.router.get("/", UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show);
        this.router.put("/:id", UserController.update)
        this.router.delete("/:id", UserController.delete)
    };
}
// expose route user ini
export default new UserRoutes().router;