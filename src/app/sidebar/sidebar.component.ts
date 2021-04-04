import { Component, OnInit } from '@angular/core';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userData;
  id: number;
  constructor(private cookieService: CookieService) {
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);

    if (this.userData.role == "merchant") {
      this.id = this.userData._id;
    }
  }

  ngOnInit(): void {
  }

}
