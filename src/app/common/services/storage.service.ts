import { IUserAccount } from '@account/models/account'
import { Injectable } from '@angular/core'
import { ICompany } from '@models/company'
import { IEnvironment } from '@models/environment'
import { IFramework } from '@models/framework'
import { ICodeLanguage } from '@models/language'
import { ILibrary } from '@models/library'
import { IPlatform } from '@models/platform'
import { IRepository } from '@models/repository'
import { ICloudService } from '@models/service'
import { ISoftware } from '@models/software'
import { IUserProfile } from '@profile/models/profile'

@Injectable({ providedIn: 'root' })
export class StorageService {
  private static _context: { [dataset: string]: any[] }
  // ======================================= //
  constructor() { }
  // ======================================= //
  public initialStorage() {
    StorageService._context = {
      profiles    : JSON.parse(localStorage.getItem('profiles'    )) as IUserProfile [],
      repositories: JSON.parse(localStorage.getItem('repositories')) as IRepository  [],
      languages   : JSON.parse(localStorage.getItem('languages'   )) as ICodeLanguage[],
      frameworks  : JSON.parse(localStorage.getItem('frameworks'  )) as IFramework   [],
      libraries   : JSON.parse(localStorage.getItem('libraries'   )) as ILibrary     [],
      platforms   : JSON.parse(localStorage.getItem('platforms'   )) as IPlatform    [],
      environments: JSON.parse(localStorage.getItem('environments')) as IEnvironment [],
      services    : JSON.parse(localStorage.getItem('services'    )) as ICloudService[],
      software    : JSON.parse(localStorage.getItem('software'    )) as ISoftware    [],
      companies   : JSON.parse(localStorage.getItem('companies'   )) as ICompany     [],
    }
  }
  public updateStorage() { }
  public appendStorage() { }
  public searchStorage() { }
}
