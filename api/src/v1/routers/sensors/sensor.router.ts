import { Router } from 'express';
import { SensorController } from '../../controllers/sensors/sensor.controller';
import { validateRequest } from '../../../middleware/validator';
import { AddSensorDataBySensorId } from '../../../middleware/validationSchemas/sensorsValidation';

export class SensorRouter {
  constructor() {}

  public getRouter() {
    const router = Router();
    const sensor = new SensorController();

    router.get('/:sensorId', sensor.getSensorDataBySensorId);

    router.post(
      '/data/:sensorId',
      validateRequest(AddSensorDataBySensorId),
      sensor.addSensorDataBySensorId,
    );

    return router;
  }
}
