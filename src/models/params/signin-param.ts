export interface SigninParam {
  loginId: string;
  password: string;
}

export interface ForgetPasswordParam {
  userId: string;
}

export interface ResetPasswordParam {
  userId: string;
  password: string;
  confirmPassword: string;
  token: string ;
}
