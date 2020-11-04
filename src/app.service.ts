import { Injectable } from '@nestjs/common';
import { Axios,  } from './utils/axios.class';
import { ResponseUsersDTO } from './dto/ResponseUsers.dto';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 getUsers(q: string) {
  //  try{
    //  if(!q) {
    //    return {
    //     "message": "Validation Failed",
    //     "errors": [
    //         {
    //             "resource": "Search",
    //             "field": "q",
    //             "code": "missing"
    //         }
    //     ],
    //     "documentation_url": "https://docs.github.com/v3/search"
    // }
    //  }
  //   return  new Axios().get<ResponseUsersDTO>('https://api.github.com/search/users', {  headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   proxy: false,
    
  // }
    
  //   );
const url = `https://api.github.com/search/users?${q}`
console.log({ url })
  return axios.get<ResponseUsersDTO>(url)

  // .then(res=> {
  //   console.log( { res})
  //   return res.data;
  // }).catch(error => {
  //   console.log({ error})
  //   return error.response.data

  // });

  //  }catch(error){
  //    console.log({ error})
  //  }
    
    // .get<ResponseUsersDTO>('https://api.github.com/search/users', {});
    
  }
}
