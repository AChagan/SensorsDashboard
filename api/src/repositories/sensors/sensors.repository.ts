import { Sensor, sensorParams } from '../../models/sensor';
import { SensorModel } from '../../schemas/sensors/sensor.schema';
import { ISensorRepository } from '../interfaces/sensors/ISensorRepository';

export class MongoBackedSensorRepository implements ISensorRepository {
  sensorModel = SensorModel;
  constructor() {}

  public async getSensorData(sensorId: string): Promise<Sensor[]> {
    const sensors = await this.sensorModel.find({ sensorId: sensorId }).exec();
    return sensors.map((sensor) => this.mapDocumentToDomain(sensor));
  }

  public async save(sensor: sensorParams): Promise<Sensor | undefined> {
    const returnedSensor = await this.sensorModel.create(sensor);
    return this.mapDocumentToDomain(returnedSensor);
  }

  private mapDocumentToDomain(sensor: any): Sensor {
    return new Sensor({
      sensorId: sensor.sensorId,
      temperature: sensor.temperature,
      humidity: sensor.humidity,
      c02: sensor.c02,
    });
  }
}
