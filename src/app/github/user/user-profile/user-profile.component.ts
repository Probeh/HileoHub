import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { GithubService } from '@github/github.service'
import { UserProfile } from '@github/user/user-profile'
import { CommitSearch } from '@models/commit-search.dto'
import { Languages } from '@models/languages.model.dto'
import { RepoSearch } from '@models/repo-search.dto'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private _login: string;
  // ======================================= //
  public profile: UserProfile;
  // ======================================= //
  constructor(private service: GithubService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.createUserProfile();
  }
  // ======================================= //
  private getLoginParam(snapshot: ActivatedRouteSnapshot) {
    return snapshot.parent.params['login']
      ? snapshot.parent.params['login']
      : this.getLoginParam(snapshot.parent)
        ? this.getLoginParam(snapshot.parent)
        : null;
  }
  private getUserLogin() {
    this._login = this.getLoginParam(this.route.snapshot);
    this.route?.queryParams?.subscribe({
      next: param => {
        if (!this._login || this.getLoginParam(this.route.snapshot) && this.getLoginParam(this.route.snapshot) != this._login)
          this.getLoginParam(this.route.snapshot)
            ? this._login = this.getLoginParam(this.route.snapshot)
            : this._login = this.service.getSelectedUsername();
      }
    });
  }
  private createUserProfile() {
    this.getUserLogin();
    if (this._login) {
      if (localStorage.getItem(this._login)) {
        this.profile = JSON.parse(localStorage.getItem(this._login));
        this.service.setSelectedProfile(this.profile);
      }
      else {
        this.profile = new UserProfile(this.service.getUserByLogin(this._login));
        this.getUserRepositories()
          .then(result => this.service.setSelectedProfile(result));
      }
    }
  }
  private getUserRepositories(): Promise<UserProfile> {
    return new Promise((resolve, reject) => {
      if (!this.profile.repos) {

        this.http.get<RepoSearch[]>(this.profile.user.repos_url)
          .toPromise()
          .then((repositories: RepoSearch[]) => {
            this.profile.repos = new Array<RepoSearch>();
            this.getUserActivity(repositories)
              .then(() => this.getUserLanguages())
              .then(() => resolve(this.profile));
          })
          .then(() => localStorage.setItem(this._login, JSON.stringify(this.profile)))
          .catch((error) => resolve(this.profile));
      }
      else resolve(this.profile);
    });
  }
  private getUserActivity(repositories: RepoSearch[]) {
    const isComplete: (current: RepoSearch) => boolean = (current: RepoSearch) => current.id == repositories[repositories.length - 1].id;

    return new Promise((resolve, reject) => {
      repositories.forEach(repository => {
        this.http.get<CommitSearch[]>(`${repository.url}/commits`)
          .toPromise()
          .then((commits: CommitSearch[]) => {
            if (repository.fork && this.claimsOwnership(commits) || !repository.fork) {
              this.profile.repos.push(repository);
              repository.commits = commits;
            }
          })
          .then(() => isComplete(repository) ? resolve(null) : {})
          .catch((error) => isComplete(repository) ? resolve(null) : {});
      })
    });
  }
  private getUserLanguages() {
    return new Promise((resolve,reject) => {
      // ======================================= //
    this.profile.languages = {};
    this.profile.user.languages = {};
    // ======================================= //
    this.profile.repos.forEach(repository => {
      this.http.get(repository.languages_url)
        .toPromise()
        .then((result: Languages) => {
          repository.languages = result;
          repository.commits.forEach(item => item.commit.languages = result);

          Object.keys(result).forEach(language => {
            const value = result[language];
            this.profile.user.languages[language] = this.profile.user.languages[language] ? this.profile.user.languages[language] + value : value;
            this.profile.languages[language] = this.profile.languages[language] ? this.profile.languages[language] + value : value;
          })
        })
        .then(() => localStorage.setItem(this._login, JSON.stringify(this.profile)))
        .catch((error) => { })
    });
    })
  }
  private claimsOwnership(commits: CommitSearch[]) {
    /*
        Itterate through all of the given repository's commits and verify the current user's involvement (author / committer).
        True / False will be returned based on if the user is eventually found to be involved in the current repo or not.
    */
    return commits.some(current =>
      current.commit.author.name
        .slice()
        .toLowerCase()
        .split(' ')
        .some(x => this.profile.user.name.slice().toLowerCase().split(' ').includes(x))
      ||
      current.commit.committer.name
        .slice()
        .toLowerCase()
        .split(' ')
        .some(x => this.profile.user.name.slice().toLowerCase().split(' ').includes(x)));
  }
}
