import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WithdrawalRequestUserDetailsComponent } from '../withdrawal-request-user-details/withdrawal-request-user-details.component';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.scss']
})
export class WithdrawalRequestComponent implements OnInit {
  q: number = 1;
  userwithdrawlist;
  pointsprice: number;
  constructor(location: Location,
    public dialog: MatDialog,
    private service: apiService, private cookieService: CookieService,
    private router: Router) {


  }

  ngOnInit(): void {
    this.getWithdrawAmountAll();
    this.getSettingsData();
  }

  userdetailsDialog(id) {
    this.cookieService.setCookie('withdraw_request_id', id, 1);
    let dialogRef = this.dialog.open(WithdrawalRequestUserDetailsComponent,
      {
        panelClass: 'my-full-screen-dialog', width: '800px',
        position: { top: '100px' },
      });

    dialogRef.afterClosed().subscribe(() => {
    })

  }

  getWithdrawAmountAll() {
    this.service.getWithdrawAmountAll({}).subscribe((resp) => {

      if (resp.status) {
        this.userwithdrawlist = resp.data;
        console.log(this.userwithdrawlist);
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


}
