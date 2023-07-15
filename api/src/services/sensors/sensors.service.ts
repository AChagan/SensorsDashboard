import { Sensor, sensorParams } from '../../models/sensor';
import { ISensorRepository } from '../../repositories/interfaces/sensors/ISensorRepository';

export class SensorService {
  private sensorRepository: ISensorRepository;
  constructor(sensorRepository: ISensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  public async save(sensor: sensorParams): Promise<Sensor | undefined> {
    const savedSensor = await this.sensorRepository.save(sensor);
    return savedSensor;
  }

  public async getSensorData(sensorId: string): Promise<Sensor[]> {
    const foundSensor = await this.sensorRepository.getSensorData(sensorId);
    return foundSensor;
  }
}
