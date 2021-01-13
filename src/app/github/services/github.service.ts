import { GithubProfile, IGithubProfile } from '@account/models/github'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CommitSearch } from '@github/models/commit-search.dto'
import { Languages } from '@github/models/languages.model.dto'
import { RepoSearch } from '@github/models/repo-search.dto'
import { GithubResult } from '@github/models/user-result.dto'
import { ICodeLanguage } from '@models/language'
import { GitCommit, IGitCommit, IRepository, Repository } from '@models/repository'
import { IUserProfile } from '@profile/models/profile'
import { StorageService } from '@services/storage.service'

@Injectable({ providedIn: 'root' })
export class GithubService {
  private _baseUrl: string = 'https://api.github.com/search';
  // ======================================= //
  constructor(private storage: StorageService, private http: HttpClient) { }
  // ======================================= //
  public getUser(query: string) {
    return this.http.get<GithubProfile>(`${this._baseUrl}/users`, { params: { q: query } })
      .toPromise()
      .then(async (result) => this.http.get<GithubResult>(result['items'][0]['url']).toPromise());
  }
  public getUserRepos(repos_url: string): Promise<IRepository[]> {
    return this.http.get<RepoSearch[]>(repos_url)
      .toPromise()
      .then((result: RepoSearch[]) => { return result.map(repo => Repository.create(repo)) });
  }
  public getRepoLanguages(repo: IRepository): Promise<Languages> {
    return this.http.get<Languages>(repo.languages_url).toPromise();
  }
  public getRepoCommits(repo: IRepository): Promise<IGitCommit[]> {
    return this.http.get<CommitSearch[]>(`${repo.repo_api}/commits`)
      .toPromise()
      .then((result: CommitSearch[]) => result.map(x => GitCommit.create(x, repo.repo_uid)));
  }
  // ======================================= //
  // Overall Data Initialization
  // ======================================= //
  public initializeUser(displayName?: string, email?: string, photo?: string) {
    return new Promise<IUserProfile>(async (resolve, reject) => {
      let storage: IUserProfile[] = JSON.parse(localStorage.getItem('profiles'));
      if (storage != null && storage.length > 0 && storage?.some((profile: IUserProfile) => profile?.email == email)) {
        const current: IUserProfile = storage['profiles']?.find((profile: IUserProfile) => profile?.email == email);
        resolve(current);
      }
      else {
        storage = storage?.length > 0 ? storage :new Array<IUserProfile>();
        const user_github: IGithubProfile = GithubProfile.create(await this.getUser(email));
        const repos: IRepository[] = (await this.getUserRepos(user_github.repos_url)).filter(x => !x.fork);
        const user_profile: IUserProfile = {
          email: email,
          name: displayName,
          avatar_url: photo,
          knowledge: { repositories: repos },
          references: { github: user_github }
        }
        storage.push(user_profile);

        user_profile.knowledge = { repositories: repos };
        user_profile.knowledge.repositories.forEach(async (repo) => {
          try {
            repo.languages = await this.getRepoLanguages(repo);
            repo.commits = await this.getRepoCommits(repo);
            await this.setUserLanguages(repo.languages, user_profile);
            localStorage.setItem('profiles', JSON.stringify(storage));
          }
          catch (error) { }
        });
        resolve(user_profile);
      }
    });
  }
  // ======================================= //
  // Overall Data Initialization
  // ======================================= //
  public setUserLanguages(languages: Languages, profile: IUserProfile): Promise<IUserProfile> {
    return new Promise((resolve, reject) => {
      profile.knowledge.languages = !profile.knowledge.languages
        ? new Array<ICodeLanguage>()
        : profile.knowledge.languages;

      Object.keys(languages).forEach(language => {
        const current: (value: string) => ICodeLanguage = (value: string) => profile.knowledge.languages.find(x => x.alias == value);

        if (!profile.knowledge.languages.includes(current(language))) {
          profile.knowledge.languages.push({ alias: language, terms: [language] })
        }

        const instances = profile?.knowledge?.repositories?.slice()?.filter(x => Object.keys(x.languages)?.includes(language));

        current(language).value = current(language).value > 0
          ? current(language).value + languages[language]
          : languages[language];
        current(language).since = instances
          .slice()
          .sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf())[0].created;
        current(language).prior = instances
          .slice()
          .sort((a, b) => new Date(b.updated).valueOf() - new Date(a.updated).valueOf())[0].updated;
        current(language).repos = instances.slice().map(x => x.repo_uid);
        current(language).total = new Date().valueOf() - new Date(current(language).since).valueOf();
        current(language).count = instances.length;

        resolve(profile);
      });
    })
  }
}
