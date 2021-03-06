import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WithdrawalRequestUserDetailsComponent } from '../withdrawal-request-user-details/withdrawal-request-user-details.component';
@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.scss']
})
export class WithdrawalRequestComponent implements OnInit {

  constructor(location: Location,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

  userdetailsDialog() {
    let dialogRef = this.dialog.open(WithdrawalRequestUserDetailsComponent,
      {
        panelClass: 'my-full-screen-dialog', width: '800px',
        position: { top: '100px' },
      });

    dialogRef.afterClosed().subscribe(() => {
    })

  }

}
