import { Observable     }         from 'rxjs'
import { HttpClient     }         from '@angular/common/http'
import { Component     , OnInit } from '@angular/core'
import { ActivatedRoute }         from '@angular/router'
import { GithubService  }         from '@github/github.service'
import   githubSearch             from '@helpers/search-builder'
import { UserResult     }         from '@models/DTOs/user-result.dto'
import { SearchDTO      }         from '@models/search.dto'

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  // ======================================= //
  public results: SearchDTO<UserResult>;
  // ======================================= //
  constructor(private service: GithubService, private active: ActivatedRoute, private http: HttpClient) {
    this.active.queryParams.subscribe(params => {
      this.http.get<SearchDTO<UserResult>>(githubSearch()[this.active.snapshot.routeConfig.path], { params })
      .subscribe({next: result => console.log(result)});
    });
  }
  ngOnInit() {}
  // ======================================= //
}
