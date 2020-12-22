import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {
  // ======================================= //
  private baseUrl: string;
  private getEndpoint: (url: string) => string = (value: string) => null;
  // ======================================= //
  constructor() { }
  // ======================================= //
}
