import { Sensor, sensorParams } from '../../models/sensor';
import { ISensorRepository } from '../../repositories/interfaces/sensors/ISensorRepository';

export class FakeSensorRepository implements ISensorRepository {
  sensors: Sensor[] = [];
  constructor() {}

  public async save(sensor: sensorParams): Promise<Sensor | undefined> {
    const sensorToBeSaved = new Sensor(sensor);
    this.sensors.push(sensorToBeSaved);
    const savedSensor = this.sensors.find(
      (sensor) => sensor.id === sensorToBeSaved.id,
    );
    return savedSensor ? savedSensor : undefined;
  }

  public async getSensorData(sensorId: string): Promise<Sensor[]> {
    const foundSensor = this.sensors.filter((sensor) => sensor.id === sensorId);
    return foundSensor;
  }
}
