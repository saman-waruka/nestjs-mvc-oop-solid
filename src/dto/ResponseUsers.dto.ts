import { UserDTO } from './User.dto'
export class ResponseUsersDTO {
  total_count: number;
  incomplete_results: boolean;
  items: UserDTO[];
  constructor(data: ResponseUsersDTO){
    const { total_count, incomplete_results, items  } = data
    this.total_count = total_count;
    this.incomplete_results = incomplete_results;
    this.items = items;
  }
}