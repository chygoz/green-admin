import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { MultiDataSet, Label, Color } from "ng2-charts";
import { apiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList;
  storeList;
  outletList;
  userCardTypeData;
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
  stats: any;

  constructor(private service: apiService) { }

  ngOnInit(): void {
    this.getStats()
    this.getUsersData();
    this.getStoresData();
    this.getOutletData();
    this.getUserCardTypeData();
  }

  getStats() {
    this.service.getStats({}).subscribe((resp) => {
      if (resp.status && resp.data[0]) {
        this.stats = resp.data[0];
      }
    })
  }

  getUsersData() {
    this.service.getUsersData({ status: true }).subscribe((resp) => {
      if (resp.status) {
        this.userList = resp.data;
      }
    })
  }
  getStoresData() {
    this.service.getStoresData({ status: true }).subscribe((resp) => {
      if (resp.status) {
        this.storeList = resp.data;
      }
    })
  }
  getOutletData() {
    this.service.getOutletData({ status: true }).subscribe((resp) => {
      if (resp.status) {
        this.outletList = resp.data;
      }
    })
  }
  getUserCardTypeData() {
    this.service.getUserCardTypeData({ status: true }).subscribe((resp) => {
      if (resp.status) {
        this.userCardTypeData = resp.data;
      }
    })
  }

}
