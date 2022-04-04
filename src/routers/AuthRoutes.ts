import BaseRoutes from './BaseRouter';
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/login", AuthController.index);
        this.router.post("/register", AuthController.create);
    };
}
export default new AuthRoutes().router;