import { Router } from 'express';
import { SensorRouter } from './routers/sensors/sensor.router';
import { AuthRouter } from './routers/auth/auth.router';

export class V1Router {
  constructor() {}

  public getV1Routers() {
    const router = Router();
    const sensorRouter = new SensorRouter();
    const authRouter = new AuthRouter();

    router.use('/sensors', sensorRouter.getRouter());
    router.use('/auth', authRouter.getRouter());

    return router;
  }
}
