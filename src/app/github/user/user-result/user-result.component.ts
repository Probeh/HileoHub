import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '@github/github.service'
import { UserResult } from '@models/user-result.dto'

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {
  // ======================================= //
  public userResult: UserResult;
  // ======================================= //
  constructor(private activeRoute: ActivatedRoute, private service: GithubService) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.userResult = this.service.getUserByLogin(params['login']);
    })
  }
  ngOnInit() { }
  // ======================================= //
}
