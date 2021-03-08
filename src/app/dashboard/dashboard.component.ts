import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { MultiDataSet, Label, Color } from "ng2-charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    "Local Card",
    "Business Card",
    "International Card"
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = "doughnut";
  public chartColors: any[] = [
    {
      backgroundColor: ["#c5d82c", "#07555cc2", "#07555c"]
    }];

  ChartOptions = {
    cutoutPercentage: 10
  };

  //Bar chart
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [25, 59, 80, 81, 56, 55, 40], label: "Series A" }
  ];
  public barChartColors: Color[] = [
    { backgroundColor: '#07555cc2' },
  ]

  //Bar chart Stacked

  public barChartOptionsStack: ChartOptions = {
    responsive: true,
  };
  public barChartLabelsStack: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartTypeStack: ChartType = 'bar';
  public barChartLegendStack = true;
  public barChartPluginsStack = [];

  public barChartDataStack: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
    { data: [-12, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' }
  ];
  public barChartColorsStack: Color[] = [
    { backgroundColor: '#07555c' },
    { backgroundColor: '#07555cc2' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
