import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivityResultComponent } from '@github/activity/activity-result/activity-result.component'
import { ActivitySearchComponent } from '@github/activity/activity-search/activity-search.component'
import { CodeResultComponent } from '@github/code/code-result/code-result.component'
import { CodeSearchComponent } from '@github/code/code-search/code-search.component'
import { CommitResultComponent } from '@github/commit/commit-result/commit-result.component'
import { CommitSearchComponent } from '@github/commit/commit-search/commit-search.component'
import { FrameworksComponent } from '@github/frameworks/frameworks.component'
import { GithubRoutingModule } from '@github/github-routing.module'
import { GithubComponent } from '@github/github.component'
import { GithubService } from '@github/github.service'
import { LabelSearchComponent } from '@github/label-search/label-search.component'
import { LanguageResultComponent } from '@github/language/language-result/language-result.component'
import { LanguageSearchComponent } from '@github/language/language-search/language-search.component'
import { LanguagesComponent } from '@github/languages/languages.component'
import { LibrariesComponent } from '@github/libraries/libraries.component'
import { PackageResultComponent } from '@github/package/package-result/package-result.component'
import { PackageSearchComponent } from '@github/package/package-search/package-search.component'
import { PatternResultComponent } from '@github/pattern/pattern-result/pattern-result.component'
import { PatternSearchComponent } from '@github/pattern/pattern-search/pattern-search.component'
import { PlatformsComponent } from '@github/platforms/platforms.component'
import { RepoResultComponent } from '@github/repository/repo-result/repo-result.component'
import { RepoSearchComponent } from '@github/repository/repo-search/repo-search.component'
import { TopicResultComponent } from '@github/topic/topic-result/topic-result.component'
import { TopicSearchComponent } from '@github/topic/topic-search/topic-search.component'
import { UserProfileComponent } from '@github/user/user-profile/user-profile.component'
import { UserResultComponent } from '@github/user/user-result/user-result.component'
import { UserSearchComponent } from '@github/user/user-search/user-search.component'

// ======================================= //
const components = [
  ActivityResultComponent,
  ActivitySearchComponent,
  CodeResultComponent,
  CodeSearchComponent,
  CommitResultComponent,
  CommitSearchComponent,
  FrameworksComponent,
  GithubComponent,
  LabelSearchComponent,
  LanguageResultComponent,
  LanguagesComponent,
  LanguageSearchComponent,
  LibrariesComponent,
  PackageResultComponent,
  PackageSearchComponent,
  PatternResultComponent,
  PatternSearchComponent,
  PlatformsComponent,
  RepoResultComponent,
  RepoSearchComponent,
  TopicResultComponent,
  TopicSearchComponent,
  UserProfileComponent,
  UserProfileComponent,
  UserResultComponent,
  UserSearchComponent,
]
//, ======================================= //
@NgModule({
  imports: [CommonModule, GithubRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: components,
  exports: components
})
// ======================================= //
export class GithubModule { }
