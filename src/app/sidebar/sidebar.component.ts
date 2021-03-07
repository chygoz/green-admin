import { Component, OnInit } from '@angular/core';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userData;
  constructor(private cookieService: CookieService) {
    this.userData = this.cookieService.getCookie('currentUser');
    this.userData = JSON.parse(this.userData);
   }

  ngOnInit(): void {
  }

}
