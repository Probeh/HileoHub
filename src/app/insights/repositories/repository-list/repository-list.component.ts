import { Component, OnInit } from '@angular/core'
import { IRepository } from '@models/repository'
import { IUserProfile } from '@profile/models/profile'
import { ProfileService } from '@profile/services/profile.service'

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  // ======================================= //
  public user_profile: IUserProfile;
  // ======================================= //
  constructor(private profile: ProfileService) {
    this.user_profile = this.profile.getCurrentProfile();
  }
  ngOnInit() { }
  // ======================================= //
  public getLanguageInfo(repo: IRepository): ILanguageInfo[] {
    let info: ILanguageInfo[] = [];
    Object.keys(repo.languages).forEach(name => {
      const percentage = +((repo.languages[name] / this.getRepoSize(repo)) * 100).toFixed(2);
      let color: string;

      if (percentage <= 10) color = 'bg-danger';
      if (percentage > 10 && percentage <= 25) color = 'bg-warning';
      if (percentage > 25 && percentage <= 50) color = 'bg-info';
      if (percentage > 50 && percentage <= 75) color = 'bg-primary';
      if (percentage > 75 && percentage <= 100) color = 'bg-success';

      info.push({
        name: name,
        total: repo.languages[name],
        percent: percentage,
        ratio: percentage,
        color: color
      })
    })
    return info;
  }
  public getRepoSize(repository: IRepository) {
    return Object.keys(repository.languages)
      .map(name => repository.languages[name])
      .reduce((x, y) => x + y, 0);
  }
}
export interface ILanguageInfo {
  name?: string,
  ratio?: number,
  percent?: number,
  total?: number,
  color?: string
}