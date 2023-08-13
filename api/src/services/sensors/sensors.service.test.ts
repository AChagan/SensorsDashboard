import { SensorReading } from '../../models/sensorReading';
import { ISensorReadingsRepository } from '../../repositories/interfaces/sensor/ISensorRepository';
import { FakeSensorReadingsRepository } from '../../test-utils/fakes/fake.sensor.repository';
import { SensorService } from './sensors.service';
import { v4 as uuidv4 } from 'uuid';

describe('Sensor Service Test', () => {
  describe('save', () => {
    let fakeSensorRepository: ISensorReadingsRepository;
    let sensorService: SensorService;
    let sensorId: string;
    let createdTs: string;

    beforeEach(() => {
      fakeSensorRepository = new FakeSensorReadingsRepository();
      sensorService = new SensorService(fakeSensorRepository);
      sensorId = uuidv4();
      createdTs = new Date().toISOString();
    });

    it('should save a sensor', async () => {
      //Given
      const sensor = {
        sensorId,
        temperature: 1,
        humidity: 2,
        c02: 3,
        createdTs,
      };

      //When
      const savedSensor = await sensorService.save(sensor);

      //Then
      expect(savedSensor).toStrictEqual(
        new SensorReading({
          sensorId,
          temperature: 1,
          humidity: 2,
          c02: 3,
          createdTs,
        }),
      );
    });
  });

  describe('getSensorData', () => {
    let fakeSensorRepository: ISensorReadingsRepository;
    let sensorService: SensorService;
    let sensorId: string;
    let createdTs: string;

    beforeEach(() => {
      fakeSensorRepository = new FakeSensorReadingsRepository();
      sensorService = new SensorService(fakeSensorRepository);
      sensorId = uuidv4();
      createdTs = new Date().toISOString();
    });

    it('should get empty array if no sensor data', async () => {
      //When
      const foundSensors = await sensorService.getSensorDataById(sensorId);

      //Then
      expect(foundSensors.length).toBe(0);
    });

    it('should get sensor data', async () => {
      //Given
      const sensorOne = {
        sensorId,
        temperature: 1,
        humidity: 2,
        c02: 3,
        createdTs,
      };
      const sensorTwo = {
        sensorId,
        temperature: 4,
        humidity: 5,
        c02: 6,
        createdTs,
      };

      await sensorService.save(sensorOne);
      await sensorService.save(sensorTwo);

      //When
      const foundSensors = await sensorService.getSensorDataById(sensorId);

      //Then
      expect(foundSensors).toStrictEqual(
        expect.arrayContaining([
          new SensorReading({
            sensorId,
            temperature: 1,
            humidity: 2,
            c02: 3,
            createdTs,
          }),
          new SensorReading({
            sensorId,
            temperature: 4,
            humidity: 5,
            c02: 6,
            createdTs,
          }),
        ]),
      );
    });
  });
});
