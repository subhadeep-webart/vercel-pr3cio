import { AccountUser } from "./account-user";

export interface AccessToken {
  user: AccountUser;
  iat: number;
  exp: number;
}
