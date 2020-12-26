import { Component, OnInit } from '@angular/core'
import { GithubService } from '@github/github.service'

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {
  public results: { [key: string]: any[] } = {};
  public options: boolean = false;
  public textStr: string = '';
  public current: string = 'users';
  public filters: string[] = ['users', 'code', 'commits', 'issues', 'labels', 'repositories', 'topics'];
  // ======================================= //
  constructor(private service: GithubService) { }
  ngOnInit() { }
  // ======================================= //
  public onTabSelect(value: string) {
    this.current = value;
  }
  public onToggleOptions() {
    this.options = !this.options;
  }
  public async onSubmit() {
    // this.service.search(this.current as SearchScopes, this.textStr)
    //   .toPromise()
    //   .then(result => this.results[this.current] = result.items)
  }
}
