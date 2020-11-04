import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

export class Axios  {

   get<T>(url: string, config ): Promise<AxiosResponse<T>> {
    return axios.get<T>(url , config);
  }


}