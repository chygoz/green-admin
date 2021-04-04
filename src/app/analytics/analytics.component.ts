import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  plans: any;
  constructor(private service: apiService) {
    this.getPlans();
    this.getSubscribedUsersCount();
   }

  ngOnInit(): void {
  }

  getPlans(){
    this.service.getPlans({}).subscribe((resp) => {
      console.log(resp);
      if(resp.status){
        this.plans = resp.data;
      }
    })
  }

  getSubscribedUsersCount(){
    this.service.getSubscribedUsersCount({}).subscribe((resp) => {
      console.log(resp);
    })
  }

}
