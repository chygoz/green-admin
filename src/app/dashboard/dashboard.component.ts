import { Component, OnInit } from '@angular/core';
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = "doughnut";

  constructor() { }

  ngOnInit(): void {
  }

}
