import { CommitSearch } from '@github/models/commit-search.dto';
import { ContentSearch } from '@github/models/content.search.dto';
import { Languages } from '@github/models/languages.model.dto';
import { GithubResult } from '@github/models/user-result.dto';

export interface RepoResult {
  // ======================================= //
  archive_url      : string       ;
  archived         : boolean      ;
  assignees_url    : string       ;
  blobs_url        : string       ;
  branches_url     : string       ;
  clone_url        : string       ;
  collaborators_url: string       ;
  comments_url     : string       ;
  commits          : CommitSearch ;
  commits_url      : string       ;
  compare_url      : string       ;
  content          : ContentSearch;
  contents_url     : string       ;
  contributors_url : string       ;
  created_at       : Date         ;
  default_branch   : string       ;
  deployments_url  : string       ;
  description?     : string       ;
  disabled         : boolean      ;
  downloads_url    : string       ;
  events_url       : string       ;
  fork             : boolean      ;
  forks            : number       ;
  forks_count      : number       ;
  forks_url        : string       ;
  full_name        : string       ;
  git_commits_url  : string       ;
  git_refs_url     : string       ;
  git_tags_url     : string       ;
  git_url          : string       ;
  has_downloads    : boolean      ;
  has_issues       : boolean      ;
  has_pages        : boolean      ;
  has_projects     : boolean      ;
  has_wiki         : boolean      ;
  homepage?        : string       ;
  hooks_url        : string       ;
  html_url         : string       ;
  id               : number       ;
  issue_comment_url: string       ;
  issue_events_url : string       ;
  issues_url       : string       ;
  keys_url         : string       ;
  labels_url       : string       ;
  language         : string       ;
  languages        : Languages    ;
  languages_url    : string       ;
  license?         : string       ;
  merges_url       : string       ;
  milestones_url   : string       ;
  mirror_url?      : string       ;
  name             : string       ;
  node_id          : string       ;
  notifications_url: string       ;
  open_issues      : number       ;
  open_issues_count: number       ;
  owner            : GithubResult ;
  private          : boolean      ;
  pulls_url        : string       ;
  pushed_at        : Date         ;
  releases_url     : string       ;
  size             : number       ;
  ssh_url          : string       ;
  stargazers_count : number       ;
  stargazers_url   : string       ;
  statuses_url     : string       ;
  subscribers_url  : string       ;
  subscription_url : string       ;
  svn_url          : string       ;
  tags_url         : string       ;
  teams_url        : string       ;
  trees_url        : string       ;
  updated_at       : Date         ;
  url              : string       ;
  watchers         : number       ;
  watchers_count   : number       ;
  // ======================================= //
}