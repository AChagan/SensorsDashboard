import { SensorReading, sensorReadingParams } from '../../models/sensorReading';
import { ISensorReadingsRepository } from '../../repositories/interfaces/sensors/ISensorRepository';

export class SensorService {
  private sensorRepository: ISensorReadingsRepository;
  constructor(sensorRepository: ISensorReadingsRepository) {
    this.sensorRepository = sensorRepository;
  }

  public async save(
    sensor: sensorReadingParams,
  ): Promise<SensorReading | undefined> {
    const savedSensor = await this.sensorRepository.saveReading(sensor);
    return savedSensor;
  }

  public async getSensorDataById(sensorId: string): Promise<SensorReading[]> {
    const foundSensor = await this.sensorRepository.getSensorDataById(sensorId);
    return foundSensor;
  }
}
