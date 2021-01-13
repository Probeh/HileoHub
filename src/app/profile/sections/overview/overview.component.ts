
import { AuthService } from '@account/services/auth.service';
import { Component, OnInit } from '@angular/core'
import { IKeyValue } from '@helpers/key-value.interface';
import { IUserProfile } from '@profile/models/profile'
import { ProfileService } from '@profile/services/profile.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public user_profile: IUserProfile;
  public knob_items = [];
  public pie_values: any;
  // ======================================= //
  constructor(private auth: AuthService, private profile: ProfileService) {
    this.auth.authChanged
      .subscribe((result: IKeyValue<boolean, IUserProfile>) => this.user_profile = result.val);
    this.user_profile = this.profile.getCurrentProfile();
    this.initializeKnobs();
    this.setPieChart()
  }
  ngOnInit() { }
  // ======================================= //
  private initializeKnobs() {
    const first = this.user_profile?.knowledge?.languages
      .slice()
      .sort((a, b) => new Date(a.since).valueOf() - new Date(b.since).valueOf())[0];
    const months = (new Date().getFullYear() - new Date(first?.since).getFullYear()) * 12 + (new Date().getMonth() - new Date(first?.since).getMonth());
    const languages = this.user_profile?.knowledge?.languages.length;
    const projects = this.user_profile?.knowledge?.repositories.length;
    const code = this.user_profile?.knowledge?.repositories
      .map(x => x.repo_size ? x.repo_size : 0)
      .reduce((x, y) => x + y, 0);
    console.log(code)

    this.knob_items = [
      {
        title: 'experience',
        value: months > 12 ? `${(months / 12).toFixed(1)}` : `${months}`,
        icon: 'fa fa-building-o',
        suffix: months > 12 ? 'Years' : 'Months',
        background: '#DB5D63'
      },
      {
        title: 'languages',
        value: languages,
        icon: 'fa fa-code',
        suffix: 'Total',
        background: '#4A90E4'
      },
      {
        title: 'projects',
        value: `${projects}`,
        icon: 'fa fa-briefcase',
        suffix: 'Total',
        background: '#38C16C'
      },
      {
        title: 'code',
        value: `${(code / 1000).toFixed(1)}`,
        icon: 'fa fa-file-code-o',
        suffix: 'MB',
        background: '#2DC2BF'
      },
    ];

  }
  public getUserRepos() {
    return this.user_profile?.knowledge?.repositories?.slice();
  }
  public getUserLanguages() {
    return this.user_profile?.knowledge.languages?.slice();
  }
  public setPieChart() {
    const labels: string[] = this.user_profile?.knowledge.languages.map(x => x.alias);
    const values: number[] = this.user_profile?.knowledge.languages.map(x => x.value);

    this.pie_values = {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }
}
