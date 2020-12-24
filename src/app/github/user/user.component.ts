import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchScopes } from '@github/github-endpoints';
import { GithubService } from '@github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public profile: any;
  public repos: any[] = [];
  public login: string;
  // ======================================= //
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) {
    this.activeRoute.queryParams.subscribe({
      next: param => {
        this.login = param.id;
        this.http
          .get(`https://api.github.com/users/${this.login}`)
          .toPromise()
          .then(result => this.profile = result)
          .then(() => this.http
            .get(this.profile.repos_url)
            .toPromise()
            .then((result) => this.repos = (result as []).slice(0, (result as []).length > 12 ? 12 : (result as []).length))
            .then(() => console.log(this.repos)))
      }
    })
  }
  ngOnInit() { }
  // ======================================= //
}
