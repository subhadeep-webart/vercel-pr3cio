import { AccountUser } from "../account-user";
import { ApiResponse } from "../common";

export interface SigninData extends ApiResponse {
  token: string;
  user: AccountUser;
}
