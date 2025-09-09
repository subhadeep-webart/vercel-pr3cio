import { AccountUser } from "../account-user";
import { ApiResponse } from "../common";

export interface VerifyEmailData extends ApiResponse {
  token: string;
  user: AccountUser;
}
