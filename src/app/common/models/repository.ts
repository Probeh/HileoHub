import { IGithubProfile             } from '@account/models/github'
import { CommitSearch               } from '@github/models/commit-search.dto'
import { Languages                  } from '@github/models/languages.model.dto'
import { RepoSearch                 } from '@github/models/repo-search.dto'
import { BaseModel     , IBaseModel } from '@models/@model'

export interface IRepository extends IBaseModel {
  // ======================================= //
  user_uid        ?: number        ;
  repo_uid        ?: number        ;
  repo_api        ?: string        ;
  html_url        ?: string        ;
  repo_node       ?: string        ;
  owner_id        ?: number        ;
  owner           ?: IGithubProfile;
  fork            ?: boolean       ;
  repo_size       ?: number        ;
  commits         ?: IGitCommit[]  ;
  content         ?: IGitContent   ;
  default_branch  ?: string        ;
  primary_language?: string        ;
  watchers        ?: number        ;
  stargazers      ?: number        ;
  languages       ?: Languages     ;
  languages_url   ?: string        ;
  content_url     ?: string        ;
  commits_url     ?: string        ;
  // ======================================= //
}
export class Repository extends BaseModel implements IRepository {
  // ======================================= //
  public user_uid        : number;
  public repo_uid        : number;
  public repo_api        : string;
  public html_url        : string;
  public repo_node       : string;
  public owner_id        : number;
  public owner           : IGithubProfile;
  public fork            : boolean;
  public repo_size       : number;
  public commits         : IGitCommit[]
  public content         : IGitContent;
  public default_branch  : string;
  public primary_language: string;
  public watchers        : number;
  public stargazers      : number;
  public languages       : Languages;
  public languages_url   : string;
  public content_url     : string;
  public commits_url     : string;
  // ======================================= //
  constructor(model?: IRepository) {
    super(model);
    this.user_uid         = model?.user_uid        ;
    this.repo_uid         = model?.repo_uid        ;
    this.repo_api         = model?.repo_api        ;
    this.html_url         = model?.html_url        ;
    this.repo_node        = model?.repo_node       ;
    this.owner_id         = model?.owner_id        ;
    this.owner            = model?.owner           ;
    this.fork             = model?.fork            ;
    this.repo_size        = model?.repo_size       ;
    this.commits          = model?.commits         ;
    this.content          = model?.content         ;
    this.default_branch   = model?.default_branch  ;
    this.primary_language = model?.primary_language;
    this.watchers         = model?.watchers        ;
    this.stargazers       = model?.stargazers      ;
    this.languages        = model?.languages       ;
    this.languages_url    = model?.languages_url   ;
    this.content_url      = model?.content_url     ;
    this.commits_url      = model?.commits_url     ;
  }
  // ======================================= //
  public static create(repo: RepoSearch): IRepository {
    return {
      name            : repo.name               ,
      description     : repo.description        ,
      created         : repo.created_at         ,
      updated         : repo.updated_at         ,
      repo_uid        : repo.id                 ,
      user_uid        : repo.owner           .id,
      repo_api        : repo.url                ,
      html_url        : repo.html_url           ,
      repo_node       : repo.node_id            ,
      owner_id        : repo.owner           .id,
      owner           : repo.owner              ,
      fork            : repo.fork               ,
      repo_size       : repo.size               ,
      default_branch  : repo.default_branch     ,
      primary_language: repo.language           ,
      watchers        : repo.watchers           ,
      stargazers      : repo.stargazers_count   ,
      languages_url   : repo.languages_url      ,
      content_url     : repo.contents_url       ,
      commits_url     : repo.commits_url        ,
    };
  }
}
export interface IGitCommit extends IBaseModel {
  // ======================================= //
  repo_uid?: number;
  author?: IGitAuthor;
  commit?: IGitCommit;
  committer?: IGitComitter;
  content?: IGitContent;
  verification?: IVerification;
  message?: string;
  node_id?: string;
  parents?: IGitCommit[];
  tree?: IGitContent[];
  sha?: string;
  html_url?: string;
  git_url?: string;
  // ======================================= //
}
export class GitCommit extends BaseModel implements IGitCommit {
  // ======================================= //
  repo_uid: number;
  author: IGitAuthor;
  commit: IGitCommit;
  committer: IGitComitter;
  content: IGitContent;
  verification: IVerification;
  message: string;
  node_id: string;
  parents: IGitCommit[];
  tree: IGitContent[];
  sha: string;
  html_url: string;
  git_url: string;
  // ======================================= //
  constructor(model?: IGitCommit) {
    super(model);
    this.repo_uid = model?.repo_uid;
    this.author = model?.author;
    this.commit = model?.commit;
    this.committer = model?.committer;
    this.content = model?.content;
    this.verification = model?.verification;
    this.message = model?.message;
    this.node_id = model?.node_id;
    this.parents = model?.parents;
    this.tree = model?.tree;
    this.sha = model?.sha;
    this.html_url = model?.html_url;
    this.git_url = model?.git_url;
  }
  // ======================================= //
  public static create(commit: CommitSearch, repo_uid: number): IGitCommit {
    return {
      repo_uid: repo_uid,
      author: commit?.commit?.author,
      committer: commit?.commit?.committer,
      html_url: commit?.html_url,
      node_id: commit?.node_id,
      sha: commit?.sha,
      git_url: commit?.url,
      message: commit?.commit?.message,
      created: commit?.commit?.author?.date,
      tree: commit?.commit?.tree,
      verification: commit?.verification,
      parents: commit?.parents?.map(parent => GitCommit.create(parent, repo_uid)),
    }
  }
}
export interface IGitAuthor {
  // ======================================= //
  date: Date;
  email: string;
  name: string;
  // ======================================= //
}
export interface IGitComitter {
  // ======================================= //
  date: Date;
  email: string;
  name: string;
  // ======================================= //
}
export interface IGitContent {
  // ======================================= //
  id?: number;
  name?: string;
  mode?: string;
  type?: string;
  path?: string;
  size?: number;
  content?: string;
  download?: string;
  sha?: string;
  git_url?: string;
  html_url?: string;
  tree?: IGitContent[];
  // ======================================= //
}

export interface IVerification {
  // ======================================= //
  payload?: any;
  reason: string;
  signature?: any;
  verified: boolean;
  // ======================================= //
}