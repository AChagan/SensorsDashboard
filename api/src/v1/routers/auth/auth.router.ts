import { Router } from 'express';
import { AuthController } from '../../controllers/auth/auth.controller';
import { checkIfRegistrationIsValid } from '../../../middleware/auth/signUpVerification';

export class AuthRouter {
  constructor() {}

  public getRouter() {
    const router = Router();
    const auth = new AuthController();

    router.use(function (req, res, next) {
      res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
      );
      next();
    });

    router.post('/register', checkIfRegistrationIsValid, auth.registerUser);
    router.post('/login', auth.loginUser);

    return router;
  }
}
