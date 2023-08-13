import request from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import { API } from '../../../app';

const app = new API().startServer();

describe('Sensor Controller Test', () => {
  describe('GET /sensors/:sensorId', () => {
    let sensorId: string;
    let createdTs: string;
    beforeEach(() => {
      sensorId = uuidv4();
      createdTs = new Date().toISOString();
    });

    it('should return 200', async () => {
      //Given
      await request(app)
        .post(`/sensors/data/${sensorId}`)
        .send({ temperature: 1, humidity: 2, c02: 3, createdTs });

      //When
      const response = await request(app).get(`/sensors/${sensorId}`);

      //Then
      expect(response.status).toBe(200);
      expect(JSON.parse(response.text)).toStrictEqual(
        expect.arrayContaining([
          {
            sensorId,
            temperature: 1,
            humidity: 2,
            c02: 3,
            createdTs,
          },
        ]),
      );
    });
  });

  describe('POST /sensors/data/:sensorId', () => {
    let sensorId: string;
    let createdTs: string;
    beforeEach(() => {
      sensorId = uuidv4();
      createdTs = new Date().toISOString();
    });

    it('should return 200', async () => {
      //When
      const response = await request(app)
        .post(`/sensors/data/${sensorId}`)
        .send({ temperature: 1, humidity: 2, c02: 3, createdTs });

      //Then
      expect(response.status).toBe(200);
      expect(JSON.parse(response.text)).toStrictEqual({
        sensorId,
        temperature: 1,
        humidity: 2,
        c02: 3,
        createdTs,
      });
    });
  });
});
