import { UserDTO } from './User.dto'
export class ResponseUsersDTO {
  protected total_count: number;
  protected incomplete_results: boolean;
  protected items: UserDTO[];
  constructor(data: ResponseUsersDTO){
    const { total_count, incomplete_results, items  } = data
    this.total_count = total_count;
    this.incomplete_results = incomplete_results;
    this.items = items;
  }
}