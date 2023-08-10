import {
  SensorReading,
  sensorReadingParams,
} from '../../../models/sensorReading';

export interface ISensorReadingsRepository {
  saveReading(sensor: sensorReadingParams): Promise<SensorReading | undefined>;
  getSensorDataById(sensorId: string): Promise<SensorReading[]>;
}
