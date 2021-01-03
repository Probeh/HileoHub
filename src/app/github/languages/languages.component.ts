import { Chart, ChartConfiguration, ChartData, ChartDataSets, ChartOptions } from 'chart.js'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { GithubService } from '@github/github.service'
import { UserProfile } from '@github/user/user-profile'

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  private _profile: UserProfile;
  private _timeline: Chart;
  private _doughnut: Chart;
  // ======================================= //
  @ViewChild('chart_timeline') public set chart_timeline(value: ElementRef) { this.setTimeline(value.nativeElement); }
  @ViewChild('chart_doughnut') public set chart_polarity(value: ElementRef) { this.setDoughnut(value.nativeElement); }
  // ======================================= //
  constructor(private github: GithubService) {
    this._profile = this.github.getSelectedProfile();
  }
  ngOnInit() { }
  // ======================================= //
  private setTimeline(canvas: HTMLCanvasElement) {
    const charts: ChartDataSets[] = new Array<ChartDataSets>({ label: 'C#', data: [4] }, { label: 'Java', data: [8] }, { label: 'TypeScript', data: [1, 2] });
    const values: ChartData = { labels: ['Jan 2020','Feb 2020','Mar 2020','','','','','','','','',''], datasets: charts };
    const custom: ChartOptions = {};
    const config: ChartConfiguration = { type: 'line', data: values, options: custom };
    this._timeline = new Chart(canvas, config);
  }
  private setDoughnut(canvas: HTMLCanvasElement) {
    const charts: ChartDataSets[] = new Array<ChartDataSets>({ label: 'C#', data: [4] }, { label: 'Java', data: [8] }, { label: 'TypeScript', data: [1, 2] });
    const values: ChartData = { labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], datasets: charts };
    const custom: ChartOptions = {};
    const config: ChartConfiguration = { type: 'polarArea', data: values, options: custom };
    this._doughnut = new Chart(canvas, config);
  }
}