import { GithubResult } from '@github/models/user-result.dto';
import { BaseModel, IBaseModel } from '@models/@model'

export interface IGithubProfile extends IBaseModel {
  // ======================================= //
  avatar_url      ?: string;
  email           ?: string;
  login           ?: string;
  type            ?: string;
  github_uid      ?: number;
  github_api      ?: string;
  github_node     ?: string;
  html_url        ?: string;
  location        ?: string;
  company         ?: string;
  public_repos    ?: number;
  repos_url       ?: string;
  twitter_username?: string;
  updated_at      ?: Date  ;
  // ======================================= //
}
export class GithubProfile extends BaseModel implements IGithubProfile {
  public avatar_url       : string;
  public email            : string;
  public login            : string;
  public type             : string;
  public github_uid       : number;
  public github_api       : string;
  public github_node      : string;
  public html_url         : string;
  public location         : string;
  public company          : string;
  public public_repos     : number;
  public repos_url        : string;
  public twitter_username : string;
  public updated_at       : Date  ;
  // ======================================= //
  constructor(model?: IGithubProfile) {
    super(model);
    this.avatar_url       = model?.avatar_url      ;
    this.email            = model?.email           ;
    this.login            = model?.login           ;
    this.type             = model?.type            ;
    this.github_uid       = model?.github_uid      ;
    this.github_api       = model?.github_api      ;
    this.github_node      = model?.github_node     ;
    this.html_url         = model?.html_url        ;
    this.location         = model?.location        ;
    this.company          = model?.company         ;
    this.public_repos     = model?.public_repos    ;
    this.repos_url        = model?.repos_url       ;
    this.twitter_username = model?.twitter_username;
    this.updated_at       = model?.updated_at      ;
  }
  // ======================================= //
  public static create(profile: GithubResult): IGithubProfile {
    return {
      created         : profile.created_at      ,
      updated         : profile.updated_at      ,
      name            : profile.name            ,
      description     : profile.bio             ,
      avatar_url      : profile.avatar_url      ,
      email           : profile.email           ,
      login           : profile.login           ,
      type            : profile.type            ,
      github_uid      : profile.id              ,
      github_api      : profile.url             ,
      github_node     : profile.node_id         ,
      html_url        : profile.html_url        ,
      location        : profile.location        ,
      company         : profile.company         ,
      public_repos    : profile.public_repos    ,
      repos_url       : profile.repos_url       ,
      twitter_username: profile.twitter_username,
      updated_at      : profile.updated_at      ,
    };
  }
}
