import { ToastrModule                               } from 'ngx-toastr'
import { CommonModule                               } from '@angular/common'
import { HTTP_INTERCEPTORS       , HttpClientModule } from '@angular/common/http'
import { ModuleWithProviders     , NgModule         } from '@angular/core'
import { BrowserAnimationsModule                    } from '@angular/platform-browser/animations'
import { RouterModule                               } from '@angular/router'
import { GithubService                              } from '@app/github/github.service'
import { SharedOptions                              } from '@helpers/shared-options'
import { IdentityModule                             } from '@identity/identity.module'
import { IdentityService                            } from '@identity/identity.service'
import { MessageService                             } from '@services/message.service'
import { RequestInterceptor                         } from '@services/request.interceptor'
import { AngularFireModule                          } from '@angular/fire'
import { AngularFireAuthModule                      } from '@angular/fire/auth'
import { providers                                  } from '@env/environment'
import { getCredentials                             } from '@helpers/credentials'

// ======================================= //
const components = [];
const modules  = [CommonModule   , IdentityModule, HttpClientModule, BrowserAnimationsModule, AngularFireAuthModule, RouterModule.forChild([]), ToastrModule.forRoot(), AngularFireModule.initializeApp(getCredentials(providers.firebase, 'firebase'))];
const services = [IdentityService, GithubService , MessageService                                                                                                                                                                                      ];
// ======================================= //

@NgModule({
  imports     : modules   ,
  declarations: components,
  providers   : services  ,
  exports: [modules, components]
})
// ======================================= //
export class SharedModule {

  static forRoot(options?: SharedOptions): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: SharedOptions, useValue: options },
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        services
      ]
    }
  }
}
