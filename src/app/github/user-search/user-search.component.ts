import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GithubService } from '@github/github.service'
import { UserSearch } from '@models/search/user-search.dto'

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  // ======================================= //
  public results: UserSearch;
  // ======================================= //
  constructor(private service: GithubService, private active: ActivatedRoute) {
    this.active.queryParams.subscribe(params => {
      if (Object.keys(params)?.length > 0) {
        this.service.searchUsers(params)
          .subscribe({
            next: response => {
              this.results = response;
            }
          });
      }
    });
  }
  ngOnInit() { }
  // ======================================= //
}
