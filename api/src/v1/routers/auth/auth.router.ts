import { Router } from 'express';
import { AuthController } from '../../controllers/auth/auth.controller';
import { checkIfRegistrationIsValid } from '../../../middleware/auth/signUpVerification';
import { validateRequest } from '../../../middleware/validator';
import {
  loginUserValidator,
  registerUserValidator,
} from '../../../middleware/validationSchemas/auth/authValidation';

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

    router.post(
      '/register',
      [validateRequest(registerUserValidator), checkIfRegistrationIsValid],
      auth.registerUser,
    );
    router.post('/login', validateRequest(loginUserValidator), auth.loginUser);

    return router;
  }
}
