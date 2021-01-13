import { NgModule              } from '@angular/core'                                       ;
import { CommonModule          } from '@angular/common'                                     ;
import { LanguageComponent     } from './language.component'                                ;
import { LanguageRoutingModule } from '@insights/languages/language/language-routing.module';

// ======================================= //
const imports    = [CommonModule         ];
const providers  = [                     ];
const modules    = [LanguageRoutingModule];
const components = [LanguageComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class LanguageModule { }
