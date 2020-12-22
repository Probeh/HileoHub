import { NgModule         } from '@angular/core'
import { BrowserModule    } from '@angular/platform-browser'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent     } from '@app/app.component'
import { HomeComponent    } from '@app/home/home.component'
import { SharedModule     } from '@common/shared.module'
import { providers        } from '@env/environment'

// ======================================= //
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot({
      firebase: providers.firebase,
      github  : providers.github
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// ======================================= //
export class AppModule { }
