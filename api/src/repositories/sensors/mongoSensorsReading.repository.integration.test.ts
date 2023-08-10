import { MongoBackedSensorReadingsRepository } from './mongoSensorsReading.repository';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

mongoose.connect('mongodb://127.0.0.1');

describe('Sensor Repository Integration Test', () => {
  const mongoBackedSensorReadingsRepository =
    new MongoBackedSensorReadingsRepository();
  describe('getSensorData', () => {
    let sensorId: string;
    beforeEach(async () => {
      sensorId = uuidv4();
    });
    it('should return an empty array', async () => {
      //When
      const savedSensor =
        await mongoBackedSensorReadingsRepository.getSensorDataById(sensorId);

      //Then
      expect(savedSensor.length).toBe(0);
    });

    it('should return a sensor', async () => {
      //Given
      const sensor = {
        sensorId,
        temperature: 1,
        humidity: 2,
        c02: 3,
      };

      await mongoBackedSensorReadingsRepository.saveReading(sensor);

      //When
      const savedSensor =
        await mongoBackedSensorReadingsRepository.getSensorDataById(
          sensor.sensorId,
        );

      //Then
      expect(savedSensor.length).toBe(1);
      expect(savedSensor).toStrictEqual(expect.arrayContaining([sensor]));
    });

    describe('save', () => {
      let sensorId: string;
      beforeEach(async () => {
        sensorId = uuidv4();
      });

      it('should save a sensor', async () => {
        // Given
        const sensor = {
          sensorId,
          temperature: 1,
          humidity: 2,
          c02: 3,
        };

        // When
        const savedSensor =
          await mongoBackedSensorReadingsRepository.saveReading(sensor);

        // Then
        expect(savedSensor).toEqual(sensor);
      });
    });
  });
});
