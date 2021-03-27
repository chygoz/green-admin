import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-withdrawal-request-user-details',
  templateUrl: './withdrawal-request-user-details.component.html',
  styleUrls: ['./withdrawal-request-user-details.component.scss']
})
export class WithdrawalRequestUserDetailsComponent implements OnInit {
  userwithdrawlist;
  ud;
  pointsprice: number;
  constructor(private service: apiService, private cookieService: CookieService,
    public dialogRef: MatDialogRef<WithdrawalRequestUserDetailsComponent>,) {
    this.ud = this.cookieService.getCookie('withdraw_request_id');
  }

  ngOnInit(): void {
    this.getWithdrawAmountRow();
    this.getSettingsData();
  }

  getWithdrawAmountRow() {

    this.service.getWithdrawAmountRow({ _id: this.ud }).subscribe((resp) => {
      if (resp.status) {
        this.userwithdrawlist = resp.data;
      } else {

      }
    })
  }

  getSettingsData() {
    this.service.getSettingsData({}).subscribe((resp) => {
      if (resp.status) {

        if (resp.points_to_min.length > 0) {

          this.pointsprice = resp.points_to_currency[0].point_value;

        }
      } else {
        this.service.showError(resp.msg);
      }
    })
  }

  ApprovedStatus(_id) {
    this.service.ApprovedStatus({ _id: _id }).subscribe((resp) => {
      if (resp.status) {

        this.dialogRef.close();
      } else {
        this.service.showError(resp.msg);
      }
    })
  }
  DesclainStatus(_id) {

  }

}
