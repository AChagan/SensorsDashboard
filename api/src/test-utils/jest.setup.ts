interface CustomMatchers<R = unknown> {
  toBeValidUUID(): R;
  toBeISODate(): R;
}

expect.extend({
  toBeValidUUID(received: string) {
    const UUID_REGEX =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    const pass = UUID_REGEX.test(received);

    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid UUID`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid UUID`,
        pass: false,
      };
    }
  },
  toBeISODate(received) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(received)) {
      return {
        message: () => `Expected ${received} to be a valid ISO date string`,
        pass: false,
      };
    }

    const d = new Date(received);
    return d.toISOString() === received
      ? {
          message: () =>
            'Expected ${received} not to be a valid ISO date string',
          pass: true,
        }
      : {
          message: () => `Expected ${received} to be a valid ISO date string`,
          pass: false,
        };
  },
});
