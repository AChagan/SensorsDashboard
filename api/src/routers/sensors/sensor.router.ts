import { Router } from 'express';
import { SensorController } from '../../controllers/sensors/sensor.controller';
import { validate } from '../../utils/validator';
import { AddSensorDataBySensorId } from '../../utils/validationSchemas/sensorsValidation';

export class SensorRouter {
  constructor() {}

  public getRouter() {
    const router = Router();
    const sensor = new SensorController();

    router.get('/sensors/:sensorId', sensor.getSensorDataBySensorId);
    router.post(
      '/sensors/data/:sensorId',
      validate(AddSensorDataBySensorId),
      sensor.addSensorDataBySensorId,
    );

    return router;
  }
}
