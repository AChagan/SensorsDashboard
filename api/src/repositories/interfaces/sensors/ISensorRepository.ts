import { Sensor, sensorParams } from '../../../models/sensor';

export interface ISensorRepository {
  save(sensor: sensorParams): Promise<Sensor | undefined>;
  getSensorData(sensorId: string): Promise<Sensor[]>;
}
