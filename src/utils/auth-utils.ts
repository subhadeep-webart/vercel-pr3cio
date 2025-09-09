import { AccessToken } from "@/models/access-token";
import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "./cookie-utils";
import { cookieConstants } from "@/constants/cookie-constants";

export const setAccessTokenInCookie = (token: string) => {
  const decodedToken = jwtDecode<AccessToken>(token);
  const expiresAt = new Date(decodedToken.exp * 1000);
  setCookie(cookieConstants.accessToken, token, expiresAt);
};

export const getAccessTokenFromCookie = () => {
  return getCookie(cookieConstants.accessToken);
};

export const setEmailInCookie = (email: string) => {
  setCookie(cookieConstants.email, email, new Date(Date.now() + 24 * 3600 * 1000) );
}

export const getEmailFromCookie = () => {
  return getCookie(cookieConstants.email);
}