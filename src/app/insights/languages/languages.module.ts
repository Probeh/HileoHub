import { ChartModule             } from 'primeng/chart'
import { CommonModule            } from '@angular/common'
import { NgModule                } from '@angular/core'
import { LanguageChartComponent  } from '@insights/languages/language-chart/language-chart.component'
import { LanguageResultComponent } from '@insights/languages/language-result/language-result.component'
import { LanguageModule          } from '@insights/languages/language/language.module'
import { LanguagesRoutingModule  } from '@insights/languages/languages-routing.module'
import { LanguagesComponent      } from '@insights/languages/languages.component'

// ======================================= //
const imports    = [CommonModule, ChartModule                                          ];
const providers  = [                                                                   ];
const modules    = [LanguagesRoutingModule, LanguageModule                             ];
const components = [LanguagesComponent, LanguageChartComponent, LanguageResultComponent];
// ======================================= //
@NgModule({
  // ======================================= //
  imports: [imports, modules],
  declarations: components,
  providers: providers,
  exports: [components, modules]
  // ======================================= //
})
export class LanguagesModule { }
