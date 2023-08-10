import { Router } from 'express';
import { SensorRouter } from './routers/sensors/sensor.router';

export class V1Router {
  constructor() {}

  public getV1Routers() {
    const router = Router();
    const sensorRouter = new SensorRouter();

    router.use('/sensors', sensorRouter.getRouter());

    return router;
  }
}
