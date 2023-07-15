export type sensorParams = {
  sensorId: string;
  temperature: number;
  humidity: number;
  c02: number;
};

export class Sensor {
  private sensorId: string;
  private temperature: number;
  private humidity: number;
  private c02: number;

  constructor(sensorParams: sensorParams) {
    this.sensorId = sensorParams.sensorId;
    this.temperature = sensorParams.temperature;
    this.humidity = sensorParams.humidity;
    this.c02 = sensorParams.c02;
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
