import { IsOptional, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UserQueryStringDTO {
  @IsNotEmpty()
  @IsString()
  q: string;

  @IsOptional()
  @IsNumber()
  page?: number;
  
  @IsOptional()
  @IsNumber()
  per_page?: number;

  @IsString()
  @IsOptional()
  sort?: string;

  @IsOptional() 
  @IsString()
  order?: string;

  constructor(data: UserQueryStringDTO){
    const { q, page = 1, per_page =10 , sort, order } = data
    this.q = q;
    this.page = Number(page) ;
    this.per_page = Number(per_page);
    this.sort = sort ; 
    this.order = order;
  }
}