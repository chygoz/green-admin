import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  userId;
  userData;
  networks = [];
  allNetworks = [];
  pendingNetworks = [];
  mainNetwork;
  constructor(private service: apiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params["id"] != undefined) {
        this.userId = params["id"];
      }
    });
    this.getUserData();
  }

  getUserData() {
    if (this.userId) {
      this.service.getUserById({ userId: this.userId }).subscribe((userData) => {
        if (userData.status) {
          this.userData = userData.data[0];
          this.mainNetwork = this.userData;
          this.gerNetworkById({ userId: userData.data[0].userId })
        } else {
          this.allNetworks = null;
          this.networks = null;
          this.mainNetwork = null;
        }
      })
    }
  }

  gerNetworkById(params) {
    if (params) {
      this.service.getNetworkByUserId(params).subscribe((resp) => {
        console.log(resp);
        this.allNetworks = resp.data
        this.networks = resp.data;
        this.networks = this.networks.filter(nw => nw.show_below == this.userData._id);
        this.networks = this.networks.sort((a, b) =>
          (a.leftLeg == true) ? -1 : 1)
      })
    }
  }


}
