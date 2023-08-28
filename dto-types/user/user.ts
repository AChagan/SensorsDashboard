interface V1PostRegisterUserResponse {
  status: number;
  response: { message: string };
}

export interface V1PostLoginUserResponse {
  status: number;
  response: {
    userId: string;
    name: string;
    email: string;
    role: string;
    accessToken: string;
  };
}
