import { AxiosResponse } from "axios";

export interface IAxios<T> {
   get(url: string, options): Promise<AxiosResponse<T>>;
}