import { setupDB } from '../../test-utils/setupDB';
import { MongoBackedSensorReadingsRepository } from './mongoSensorsReading.repository';
import { v4 as uuidv4 } from 'uuid';

describe('Sensor Repository Integration Test', () => {
  setupDB();

  const mongoBackedSensorReadingsRepository =
    new MongoBackedSensorReadingsRepository();
  describe('getSensorData', () => {
    let sensorId: string;
    let createdTs: string;
    beforeEach(async () => {
      sensorId = uuidv4();
      createdTs = new Date().toISOString();
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
        createdTs,
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
      let createdTs: string;
      beforeEach(async () => {
        sensorId = uuidv4();
        createdTs = new Date().toISOString();
      });

      it('should save a sensor', async () => {
        // Given
        const sensor = {
          sensorId,
          temperature: 1,
          humidity: 2,
          c02: 3,
          createdTs: createdTs,
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
