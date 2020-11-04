import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import  https from 'https';
interface User {
  id: number;
  name: string;
};

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:7000/api",
  headers: {
    'Content-Type': 'application/json'
  },
  proxy: false,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
};

const instance: AxiosInstance = axios.create(config);



instance
  .get<User>("/user/111")
  .then((response: AxiosResponse<User>) => {
    console.log('response: ', response);
    // do something about response
  })
  .catch((error: AxiosError) => {
    console.error('error: ', error);
  });

  export const get = (url) => {
    return instance.get<User>(url);
  }