import { Injectable } from '@nestjs/common';
import { ResponseUsersDTO } from './dto/ResponseUsers.dto';
import axios from "axios"
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(q: string ) {
    const url   = `https://api.github.com/search/users?${q}`
    console.log({ url })
    return axios.get<ResponseUsersDTO>(url).then((response: AxiosResponse )=> response.data);
  }
}
