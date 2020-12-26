import { UserResult } from '@models/user-result.dto'

export interface UserSearch {
  total_count       : number           ;
  incomplete_results: boolean          ;
  items             : Array<UserResult>;
}