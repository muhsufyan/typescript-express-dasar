import BaseRoutes from './BaseRouter';
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/login", AuthController.login);
        this.router.post("/register", AuthController.register);
    };
}
export default new AuthRoutes().router;