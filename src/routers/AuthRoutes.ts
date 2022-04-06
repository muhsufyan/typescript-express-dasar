import BaseRoutes from './BaseRouter';
import AuthController from '../controllers/AuthController';
import validate from '../middleware/AuthValidator';

class AuthRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/login", AuthController.login);
        // data akan divalidasi dulu jika lolos maka akan dilanjutkan ke AuthController
        this.router.post("/register", validate, AuthController.register);
    };
}
export default new AuthRoutes().router;