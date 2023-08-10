import { Request, Response, NextFunction } from 'express';
import { SensorService } from '../../../services/sensors/sensors.service';
import { MongoBackedSensorReadingsRepository } from '../../../repositories/sensors/mongoSensorsReading.repository';

export class SensorController {
  sensorService: SensorService;

  constructor() {
    this.sensorService = new SensorService(
      new MongoBackedSensorReadingsRepository(),
    );
  }

  getSensorDataBySensorId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const foundSensors = await this.sensorService.getSensorDataById(
      req.params.sensorId,
    );
    res.json(foundSensors);
  };

  addSensorDataBySensorId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const savedSensor = await this.sensorService.save({
      sensorId: req.params.sensorId,
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      c02: req.body.c02,
    });
    res.json(savedSensor);
  };
}
