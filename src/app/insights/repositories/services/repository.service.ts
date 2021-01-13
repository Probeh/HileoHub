import { Injectable } from '@angular/core'
import { IRepository } from '@models/repository'
import { StorageService } from '@services/storage.service'

@Injectable({ providedIn: 'root' })
export class RepositoryService {
  // ======================================= //
  constructor(private storage: StorageService) { }
  // ======================================= //
  public getUserRepositories(user: string): IRepository[] {
    return null;
  }
}
