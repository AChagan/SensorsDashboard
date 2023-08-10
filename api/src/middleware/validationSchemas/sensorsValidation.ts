import { z } from 'zod';

const addSensorDataBySensorId = z.object({
  body: z.object({
    temperature: z.number(),
    humidity: z.number(),
    c02: z.number(),
  }),
});

export const AddSensorDataBySensorId = addSensorDataBySensorId;
