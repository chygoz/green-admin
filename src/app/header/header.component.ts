import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData;
  constructor(private router: Router, private cookieService: CookieService) {
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);
   }

  ngOnInit(): void {
  }

  logout(){
    this.cookieService.deleteCookie('currentUser');
    this.cookieService.deleteCookie('token');
    this.router.navigate(['/']);
  }

}
