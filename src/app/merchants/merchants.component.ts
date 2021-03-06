import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewMerchantComponent } from '../new-merchant/new-merchant.component';
import { NewOutletComponent } from '../new-outlet/new-outlet.component';
@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {

  constructor(location: Location,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
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
    })

  }


}
