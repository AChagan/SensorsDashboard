import { z } from 'zod';

const loginUser = z.object({
  body: z.object({
    email: z.string().email('Invalid email.'),
    password: z.string(),
  }),
});

const registerUser = z.object({
  body: z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long.'),
    email: z.string().email('Invalid email.'),
    password: z.string().min(6, 'Password must be at least 6 characters long.'),
    role: z.string(),
  }),
});

export const loginUserValidator = loginUser;
export const registerUserValidator = registerUser;
