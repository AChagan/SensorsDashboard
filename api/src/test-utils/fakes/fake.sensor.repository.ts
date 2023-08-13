import { SensorReading, sensorReadingParams } from '../../models/sensorReading';
import { ISensorReadingsRepository } from '../../repositories/interfaces/sensor/ISensorRepository';

export class FakeSensorReadingsRepository implements ISensorReadingsRepository {
  sensors: SensorReading[] = [];
  constructor() {}

  public async saveReading(
    sensor: sensorReadingParams,
  ): Promise<SensorReading | undefined> {
    const sensorToBeSaved = new SensorReading(sensor);
    this.sensors.push(sensorToBeSaved);
    const savedSensor = this.sensors.find(
      (sensor) => sensor.id === sensorToBeSaved.id,
    );
    return savedSensor ? savedSensor : undefined;
  }

  public async getSensorDataById(sensorId: string): Promise<SensorReading[]> {
    const foundSensor = this.sensors.filter((sensor) => sensor.id === sensorId);
    return foundSensor;
  }
}
