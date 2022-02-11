import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewMerchantComponent } from '../new-merchant/new-merchant.component';
import { NewOutletComponent } from '../new-outlet/new-outlet.component';
import { CookieService } from '../services/cookie.service';
import { apiService } from '../api.service';
@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {
  userData;
  filter = '';
  q: number = 1;
  merchants = [];
  constructor(location: Location, public dialog: MatDialog, private router: Router,
    private cookieService: CookieService, private service: apiService) {
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);

  }

  ngOnInit(): void {
    this.getMerchants();
  }

  getMerchants() {
    this.service.getMerchants({}).subscribe((resp) => {

      if (resp.status) {
        this.merchants = resp.data;
      }

    })
  }
  viewoutlets(merchantId) {

  }

  deleteMerchant(merchantId) {
    this.service.deleteMerchant({ merchantId }).subscribe((resp) => {
      if (resp.status) {
        this.service.showSuccess(resp.msg);
        this.getMerchants();
      } else {
        this.service.showError(resp.msg);
      }
    })
  }

  newmarchantDialog() {
    let dialogRef = this.dialog.open(NewMerchantComponent,
      {
        panelClass: 'my-full-screen-dialog', width: '800px',
        position: { top: '100px' },
      });

    dialogRef.afterClosed().subscribe(() => {
      this.getMerchants();
    })

  }

  newouletDialog() {
    let dialogRef = this.dialog.open(NewOutletComponent,
      {
        panelClass: 'my-full-screen-dialog', width: '800px',
        position: { top: '100px' },
      });

    dialogRef.afterClosed().subscribe(() => {
    })

  }


}
