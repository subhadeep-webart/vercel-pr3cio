import { config } from "@/utils/app-config";
import axios, {
  AxiosError,
  AxiosInterceptorOptions,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const baseURL = config.env.API_BASE_URL;

const instance = axios.create({ baseURL });

function injectAuthToken(jwt: string) {
  instance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

function removeAuthToken() {
  delete instance.defaults.headers.common.Authorization;
}

function insertResponseInterceptor(
  onFulfilled?:
    | ((
        value: AxiosResponse<any>
      ) => AxiosResponse<any> | Promise<AxiosResponse<any>>)
    | undefined,
  onRejected?: ((error: any) => any) | undefined
) {
  instance.interceptors.response.use(onFulfilled, onRejected);
}

function insertRequestInterceptor(
  onFulfilled?:
    | ((
        value: InternalAxiosRequestConfig<any>
      ) =>
        | InternalAxiosRequestConfig<any>
        | Promise<InternalAxiosRequestConfig<any>>)
    | undefined,
  onRejected?: ((error: any) => any) | undefined,
  options?: AxiosInterceptorOptions
) {
  instance.interceptors.request.use(onFulfilled, onRejected, options);
}

function getErrorMessage(error: AxiosError | Error): string {
  // Check if the error is an AxiosError
  if (error instanceof AxiosError) {
    if (error.response && error.response.data && error.response.data.message) {
      return error.response.data.message;
    } else {
      return "An error occurred";
    }
  }

  // Default handling for non-Axios errors
  return error.message || "An unknown error occurred";
}

const httpService = {
  get: instance.get,
  post: instance.post,
  delete: instance.delete,
  put: instance.put,
  patch: instance.patch,
  injectAuthToken,
  removeAuthToken,
  insertResponseInterceptor,
  insertRequestInterceptor,
  getErrorMessage,
};

export default httpService;
