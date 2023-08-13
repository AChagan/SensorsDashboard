export type sensorReadingParams = {
  sensorId: string;
  temperature: number;
  humidity: number;
  c02: number;
  createdTs: string;
};

export class SensorReading {
  private sensorId: string;
  private temperature: number;
  private humidity: number;
  private c02: number;
  private createdTs: string;

  constructor(sensorReadingParams: sensorReadingParams) {
    this.sensorId = sensorReadingParams.sensorId;
    this.temperature = sensorReadingParams.temperature;
    this.humidity = sensorReadingParams.humidity;
    this.c02 = sensorReadingParams.c02;
    this.createdTs = sensorReadingParams.createdTs;
  }

  get id(): string {
    return this.sensorId;
  }

  get temperatureValue(): number {
    return this.temperature;
  }

  get humidityValue(): number {
    return this.humidity;
  }

  get c02Value(): number {
    return this.c02;
  }

  get createdTsValue(): string {
    return this.createdTs;
  }
}
