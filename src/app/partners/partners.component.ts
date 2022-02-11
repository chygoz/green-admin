import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewPartnerComponent } from '../new-partner/new-partner.component';
import { CookieService } from '../services/cookie.service';
import { apiService } from '../api.service';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  userData;
  filter = '';
  q: number = 1;
  partners = [];
  constructor(public dialog: MatDialog, private router: Router,
    private cookieService: CookieService, private service: apiService) {
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);
  }

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.service.getPartners({}).subscribe((resp) => {
      if (resp.status) {
        this.partners = resp.data;

      }

    })
  }

  deletePartners(parenttId) {
    this.service.deletePartners({ parenttId }).subscribe((resp) => {
      if (resp.status) {
        this.service.showSuccess(resp.msg);
        this.getPartners();
      } else {
        this.service.showError(resp.msg);
      }
    })
  }

  newmarchantDialog() {
    let dialogRef = this.dialog.open(NewPartnerComponent,
      {
        panelClass: 'my-full-screen-dialog', width: '800px',
        position: { top: '100px' },
      });

    dialogRef.afterClosed().subscribe(() => {
      this.getPartners();
    })

  }
  editPartners(parenttId) {

  }

}
