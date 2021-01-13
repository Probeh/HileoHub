import { IAdobeProfile     } from '@account/models/adobe'
import { IGithubProfile    } from '@account/models/github'
import { IGoogleProfile    } from '@account/models/google'
import { ILinkedinProfile  } from '@account/models/linkedin'
import { IMicrosoftProfile } from '@account/models/microsoft'
import { ITwitterProfile   } from '@account/models/twitter'

export interface IReferences {
  // ======================================= //
  github   ?: IGithubProfile   ;
  linkedin ?: ILinkedinProfile ;
  microsoft?: IMicrosoftProfile;
  google   ?: IGoogleProfile   ;
  twitter  ?: ITwitterProfile  ;
  adobe    ?: IAdobeProfile    ;
  // ======================================= //
}
