import { Component, OnInit } from '@angular/core';
import { Endpoints } from '@github/endpoints.enum';
import { GithubService } from '@github/github.service';
import { SearchScopes } from '@github/search-scopes';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  public textStr: string = '';
  public current: string = 'Users';
  public filters: string[] = ['Users', 'Code', 'Commits', 'Issues', 'Labels', 'Repositories', 'Topics',];
  // ======================================= //
  constructor(private service: GithubService) { }
  ngOnInit() { }
  // ======================================= //
  public onTabSelect(value: string) {
    this.current = value;
  }
  public async onSubmit() {
    this.service.search(this.current as SearchScopes, this.textStr)
    .toPromise()
    .then(result => {
      console.log(result)
    })
  }
}
