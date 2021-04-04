import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent implements OnInit {
  userId;
  filter = '';
  userData: any;
  records = [];
  q: number = 1;
  constructor(private service: apiService) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  getUserById() {

    if (this.userId) {
      let params = {
        userId: this.userId
      }
      this.service.getUserById(params).subscribe((resp) => {
        if (resp.data.length > 0) {
          this.userData = resp.data[0];
        } else {
          this.service.showError("User Not Found!")
          this.userData = null;
        }
      });
    }
  }

  grandDiscount(user) {
    this.service.grantDiscount({ userId: user._id }).subscribe((resp) => {
      if (resp.status) {
        this.service.showSuccess(resp.msg);
        this.userData = null;
        this.userId = '';
        this.getDiscounts();
      } else {
        this.service.showError(resp.msg);
      }
    })
  }

  getDiscounts() {
    this.service.getDiscounts({}).subscribe((resp) => {
      if (resp.status) {
        this.records = resp.data;
      }
    })
  }

}
