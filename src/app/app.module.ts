import { HTTP_INTERCEPTORS      , HttpClientModule } from '@angular/common/http'
import { NgModule                                  } from '@angular/core'
import { AngularFireModule                         } from '@angular/fire'
import { AngularFireAuthModule                     } from '@angular/fire/auth'
import { BrowserModule                             } from '@angular/platform-browser'
import { BrowserAnimationsModule                   } from '@angular/platform-browser/animations'
import { AppRoutingModule                          } from '@app/app-routing.module'
import { AppComponent                              } from '@app/app.component'
import { LoadingModule                             } from '@app/sections/loading/loading.module'
import { SharedModule                              } from '@common/shared.module'
import { environment                               } from '@env/environment'
import { HeaderInterceptor                         } from '@interceptors/header.interceptor'
import { NavigationComponent                       } from '@navigation/navigation.component'
import { ResourcesModule                           } from '@resources/resources.module'
import { SidenavModule                             } from '@sidenav/sidenav.module'

@NgModule({
  // ======================================= //
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule          ,
    LoadingModule          ,
    HttpClientModule       ,
    BrowserAnimationsModule,
    AppRoutingModule       ,
    SidenavModule          ,
    AngularFireAuthModule  ,
    SharedModule   .forRoot(),
    ResourcesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
  // ======================================= //
})
export class AppModule { }
