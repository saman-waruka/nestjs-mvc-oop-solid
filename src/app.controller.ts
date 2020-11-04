import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UnprocessableEntityException } from '@nestjs/common';
import { UserQueryStringDTO } from './dto/UserQueryString.dto';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { ResponseUsersDTO } from './dto/ResponseUsers.dto';
import { validate } from "class-validator";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getUsers(@Query() query: UserQueryStringDTO) {
    // console.log( { query });

    try{
      // const userQuerystring = query;
      const userQuerystring = new UserQueryStringDTO(query);
      await validate(userQuerystring).then(errors => { // errors is an array of validation errors
        if (errors.length > 0) {
            // console.log("validation query object failed. errors: ", errors);
            throw new UnprocessableEntityException(errors.map(ValidationError => {
          return ValidationError.constraints
        }));

        } else {
            // console.log("validation query object succeed");
        }
    });
      const queryString = Object.keys(userQuerystring).map( key => {
        return `${key}=${query[key]}`
      }).join('&');

      return this.appService.getUsers(queryString
      
      ).then((res:AxiosResponse<ResponseUsersDTO>) =>  {
        // console.log( { res })
       const result =  new ResponseUsersDTO(res.data);
        return result
      
      }).catch(error=> {
        // console.log(error);
        throw new UnprocessableEntityException(error.response.data);
      });

    }catch(error){
      // console.log(error);
       throw new UnprocessableEntityException(error)
    }
  }
}
