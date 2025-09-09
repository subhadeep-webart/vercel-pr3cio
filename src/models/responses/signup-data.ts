import { ApiResponse } from "../common";

export interface SignupData extends ApiResponse {
  status: string;
  message: string;
}
