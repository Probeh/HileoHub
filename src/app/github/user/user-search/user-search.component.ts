import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { GithubService } from '@github/github.service'
import { UserResult } from '@models/user-result.dto'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  // ======================================= //
  public $results: Observable<UserResult[]>;
  // ======================================= //
  constructor(private service: GithubService, private active: ActivatedRoute) {
    this.$results = this.service.getCachedUsers();
    this.active.queryParams.subscribe(params => {
      if (Object.keys(params)?.length > 0) {
        const query: Params = { per_page: 10 };
        Object.keys(params).forEach(param => query[param] = params[param]);

        this.service.searchUsers(query)
          .then((response) => this.$results = response);
      }
    });
  }
  ngOnInit() { }
  // ======================================= //
}
