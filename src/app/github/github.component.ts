import { Component    , OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { GithubService         } from '@github/github.service'

@Component({
  selector   : 'app-github'             ,
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  // ======================================= //
  public visible: boolean = true;
  public options: boolean = false;
  public textStr: string = '';
  public current: string = 'users';
  public pathmap: { [key: string]: string };
  public filters: string[] = ['users', 'projects', 'code', 'commits', 'packages', 'topics', 'labels'];
  // ======================================= //
  constructor(private service: GithubService, private router: Router) {
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          this.pathmap = {};
          this.current = event.urlAfterRedirects.split('/')[2]?.split('?')[0];
          this.visible = event.urlAfterRedirects.endsWith(this.current);
          const routes: string[] = event.urlAfterRedirects.split('/');
          routes?.forEach(route => {
            if (route.includes('?q=')) {
              this.pathmap[route.split('?q=')[0]] = event.urlAfterRedirects.slice(0, event.urlAfterRedirects.indexOf('?q='));
              route.split('?q=')[1]?.split('/')[0] ? this.service.setSelectedUsername(route.split('?q=')[1]?.split('/')[0]) : {};
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
    return this.pathmap ? Object.keys(this.pathmap)?.map(route => new KeyValue(route, this.pathmap[route])) : [];
  }
  public onToggleOptions() {
    this.options = !this.options;
  }
  public onToggleShow(path?: string) {
    this.visible = !this.visible;
  }
  public async onSubmit() {
    this.visible = false;
    this.router.navigate([this.current], { queryParams: { q: this.textStr } });
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