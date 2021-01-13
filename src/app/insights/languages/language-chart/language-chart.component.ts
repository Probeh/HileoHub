import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js'
import { Component, Input, OnInit } from '@angular/core'
import { ICodeLanguage } from '@models/language'
import { IRepository } from '@models/repository'

@Component({
  selector: 'app-language-chart',
  templateUrl: './language-chart.component.html',
  styleUrls: ['./language-chart.component.scss']
})
export class LanguageChartComponent implements OnInit {
  private months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // ======================================= //
  @Input() public repos: IRepository[];
  @Input() public languages: ICodeLanguage[];
  @Input() public set type(value: ChartType) {
    this.chart = value;
    this.initializeChart();
  }
  // ======================================= //
  public chart: ChartType;
  public entries: ChartData;
  public options: ChartOptions;
  // ======================================= //
  constructor() { }
  ngOnInit() { }
  // ======================================= //
  private initializeChart() {
    if (this.chart == 'doughnut')
      this.initializeDoughnut()
    if (this.chart == 'line')
      this.initializeLines();
  }
  private initializeLines() {
    const dates: string[] = new Array();
    const items: ChartDataSets[] = new Array();
    this.repos?.slice()
      .sort((first, second) => new Date(first.created).valueOf() - new Date(second.created).valueOf())
      .map(created => `${this.months[new Date(created.created).getMonth()]}`)
      .forEach((date: string) => {
        !dates.includes(date) ? dates.push(date) : {};
      });

    this.entries = { labels: dates, datasets: items };

    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        position: 'top'
      }
    };
  }
  private initializeDoughnut() {
    this.entries = {
      datasets: [{
        data: [11, 16, 7, 3, 14],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
        label: 'My dataset'
      }],
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"]
    };
    this.options = {

    }
  }
  // ======================================= //

  public selectData(event) {
    console.log({ severity: 'info', summary: 'Data Selected', 'detail': this.entries.datasets[event.element._datasetIndex].data[event.element._index] });
  }
}
