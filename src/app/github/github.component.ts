import { Component    , OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { GithubService         } from '@github/github.service'

@Component({
  selector   :  'app-github'             ,
  templateUrl:  './github.component.html',
  styleUrls  : ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  // ======================================= //
  public options: boolean = false;
  public textStr: string = '';
  public current: string = 'users';
  public pathmap: { [key: string]: string };
  public filters: string[] = ['users', 'code', 'commits', 'issues', 'packages', 'projects', 'topics', 'labels', 'repositories'];
  // ======================================= //
  constructor(private service: GithubService, private router: Router) {
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          this.pathmap = {};
          this.current = event.urlAfterRedirects.split('/')[2]?.split('?')[0];
          const routes: string[] = event.urlAfterRedirects.split('/');
          routes.forEach(route => {
            if (route.includes('?q=')) {
              this.pathmap[route.split('?q=')[0]] = event.urlAfterRedirects.slice(0, event.urlAfterRedirects.indexOf('?q='));
            }
            else this.pathmap[route == '' ? 'search' : route] = event.urlAfterRedirects.slice(0, event.urlAfterRedirects.indexOf(route) + route.length);
          })
        }
      }
    })
  }
  ngOnInit() { }
  // ======================================= //
  public getBreadcrumbs() {
    return Object.keys(this.pathmap).map(route => new KeyValue(route, this.pathmap[route]));
  }
  public onToggleOptions() {
    this.options = !this.options;
  }
  public async onSubmit() {
    this.router.navigate([this.router.url], { queryParams: { q: this.textStr } });
  }
}
export class KeyValue<T_Key, T_Value> {
  public key: T_Key;
  public value: T_Value;

  constructor(key: T_Key, value: T_Value) {
    this.key = key;
    this.value = value;
  }
}