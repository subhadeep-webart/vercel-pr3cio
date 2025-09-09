import { AccountUser } from "../account-user";
import { ApiResponse } from "../common";

export interface ProfileResponse  extends ApiResponse{
    user: AccountUser
}