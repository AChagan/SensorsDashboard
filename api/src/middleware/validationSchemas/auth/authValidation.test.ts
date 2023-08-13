import { loginUserValidator } from './authValidation';

describe('authValidation', () => {
  it('should validate register', async () => {
    //When
    const parsedData = loginUserValidator.parse({
      body: { email: 'the-user-email', password: 'the-user-password' },
    });

    //Then
    expect(parsedData).toBeDefined();
    expect(parsedData.body.email).toBe('the-user-email');
    expect(parsedData.body.password).toBe('the-user-password');
  });
});
