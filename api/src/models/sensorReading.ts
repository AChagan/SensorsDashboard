export type sensorReadingParams = {
  sensorId: string;
  temperature: number;
  humidity: number;
  c02: number;
};

export class SensorReading {
  private sensorId: string;
  private temperature: number;
  private humidity: number;
  private c02: number;

  constructor(sensorReadingParams: sensorReadingParams) {
    this.sensorId = sensorReadingParams.sensorId;
    this.temperature = sensorReadingParams.temperature;
    this.humidity = sensorReadingParams.humidity;
    this.c02 = sensorReadingParams.c02;
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
}
