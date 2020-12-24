
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SharedOptions } from '@helpers/shared-options'

@Injectable()
export class GithubService {
  // ======================================= //
  constructor(private options: SharedOptions, private http: HttpClient) { }
  // ======================================= //
}
export interface KeyValue {
  [key: string]: string;
}
