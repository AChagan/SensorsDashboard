import { AddSensorDataBySensorId } from './sensorsValidation';

describe('Sensor Validation Test', () => {
  it('should validate AddSensorDataBySensorId', () => {
    const parsedData = AddSensorDataBySensorId.parse({
      body: {
        temperature: 1,
        humidity: 2,
        c02: 3,
      },
    });
    expect(parsedData).toStrictEqual({
      body: {
        temperature: 1,
        humidity: 2,
        c02: 3,
      },
    });
  });

  it('should not validate AddSensorDataBySensorId with invalid sensor data', () => {
    expect(() =>
      AddSensorDataBySensorId.parse({
        body: {
          temperature: 'invalid-temperature',
          humidity: 2,
          c02: 3,
        },
      }),
    ).toThrowError('Expected number, received string');
  });
});
