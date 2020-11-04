import { IsOptional, IsNotEmpty } from "class-validator";

export class UserQueryStringDTO {

  @IsNotEmpty()
  q: string;

  @IsOptional()
  page?: number;
  
  @IsOptional()
  per_page?: number;

  @IsOptional()
  sort?: string;

  @IsOptional()
  order?: string;

  constructor(data: UserQueryStringDTO){
    const { q, page, per_page , sort, order } = data
    this.q = q;
    this.page = page ;
    this.per_page = per_page;
    this.sort = sort ; 
    this.order = order;
  }
}