import axios, { AxiosInstance, AxiosResponse } from "axios";

// declare module "axios" {
//   type AxiosResponse<T = any> = Promise<T>;
// }

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    const baseURL = `${window.location.protocol}//${window.location.host}`;
    this.instance = axios.create({
      baseURL,
    });
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
