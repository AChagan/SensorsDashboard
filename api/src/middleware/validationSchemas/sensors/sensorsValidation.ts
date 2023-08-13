import { z } from 'zod';

const stringToValidDate = z.string().transform((dateString, ctx) => {
  const date = new Date(dateString);
  if (!z.date().safeParse(date).success) {
    ctx.addIssue({
      code: z.ZodIssueCode.invalid_date,
    });
  }
  return dateString;
});

const addSensorDataBySensorId = z.object({
  body: z.object({
    temperature: z.number(),
    humidity: z.number(),
    c02: z.number(),
    createdTs: stringToValidDate,
  }),
});

export const AddSensorDataBySensorId = addSensorDataBySensorId;
