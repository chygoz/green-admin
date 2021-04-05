import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  plans: any;
  selectedPlan: any;
  subscribedUSers: any;
  constructor(private service: apiService) {
    this.getPlans();
    this.getSubscribedUsersCount();
  }

  ngOnInit(): void {
  }

  getPlans() {
    this.service.getPlans({}).subscribe((resp) => {
      if (resp.status) {
        this.plans = resp.data;
      }
    })
  }

  getSubscribedUsersCount() {
    this.service.getSubscribedUsersCount({}).subscribe((resp) => {
      this.subscribedUSers = resp.data
    })
  }

  selectedCard(event) {
    if (event) {
      this.selectedPlan = this.subscribedUSers.find(su => su._id == event);
      this.selectedPlan.percent = (100 * this.selectedPlan.subscribedUsers) / this.selectedPlan.totalUsers;
    }else {
      this.selectedPlan = null;
    }
  }

}
