import { SensorReading, sensorReadingParams } from '../../models/sensorReading';
import { SensorReadingModel } from '../../schemas/sensors/sensor.schema';
import { ISensorReadingsRepository } from '../interfaces/sensors/ISensorRepository';

export class MongoBackedSensorReadingsRepository
  implements ISensorReadingsRepository
{
  SensorReadingModel = SensorReadingModel;
  constructor() {}

  public async getSensorDataById(sensorId: string): Promise<SensorReading[]> {
    const sensors = await this.SensorReadingModel.find({
      sensorId: sensorId,
    }).exec();
    return sensors.map((sensor) => this.mapDocumentToDomain(sensor));
  }

  public async saveReading(
    sensor: sensorReadingParams,
  ): Promise<SensorReading | undefined> {
    const returnedSensor = await this.SensorReadingModel.create(sensor);
    return this.mapDocumentToDomain(returnedSensor);
  }

  private mapDocumentToDomain(sensor: any): SensorReading {
    return new SensorReading({
      sensorId: sensor.sensorId,
      temperature: sensor.temperature,
      humidity: sensor.humidity,
      c02: sensor.c02,
    });
  }
}
