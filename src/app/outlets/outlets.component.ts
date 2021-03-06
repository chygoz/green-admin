import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewMerchantComponent } from '../new-merchant/new-merchant.component';
import { NewOutletComponent } from '../new-outlet/new-outlet.component';
import { CookieService } from '../services/cookie.service';
import { apiService } from '../api.service';
@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss']
})
export class OutletsComponent implements OnInit {

  userData;
  outlets = [];
  constructor(location: Location, public dialog: MatDialog, private router: Router, 
    private cookieService: CookieService, private service: apiService) {
    this.userData = this.cookieService.getCookie('currentUser');
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }

  ngOnInit(): void {
    this.getOutlets();
  }

  getOutlets(){
    this.service.getOutlets({}).subscribe((resp) => {
      if(resp.status){
        this.outlets = resp.data;
        console.log(this.outlets);
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
    })
  }

  newouletDialog() {
    let dialogRef = this.dialog.open(NewOutletComponent,
      {
        panelClass: 'my-full-screen-dialog', width: '800px',
        position: { top: '100px' },
      });

    dialogRef.afterClosed().subscribe(() => {
      this.getOutlets();
    })
  }

  deleteOutlet(id){
    this.service.deleteOutlet({id}).subscribe((resp) => {
      this.service.showSuccess(resp.msg);
      this.getOutlets();
    })
  }

}
