import { AddSensorDataBySensorId } from './sensorsValidation';

describe('Sensor Validation Test', () => {
  let createdTs: string;
  beforeEach(() => {
    createdTs = new Date().toISOString();
  });

  it('should validate AddSensorDataBySensorId', () => {
    const parsedData = AddSensorDataBySensorId.parse({
      body: {
        temperature: 1,
        humidity: 2,
        c02: 3,
        createdTs,
      },
    });
    expect(parsedData).toStrictEqual({
      body: {
        temperature: 1,
        humidity: 2,
        c02: 3,
        createdTs,
      },
    });
  });

  it('should not validate AddSensorDataBySensorId with invalid date string', () => {
    expect(() =>
      AddSensorDataBySensorId.parse({
        body: {
          temperature: 1,
          humidity: 2,
          c02: 3,
          createdTs: 'invalid-date-string',
        },
      }),
    ).toThrowError('Invalid date');
  });

  it('should not validate AddSensorDataBySensorId with invalid sensor data', () => {
    expect(() =>
      AddSensorDataBySensorId.parse({
        body: {
          temperature: 'invalid-temperature',
          humidity: 2,
          c02: 3,
          createdTs,
        },
      }),
    ).toThrowError('Expected number, received string');
  });
});
