import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  loginErr = '';
  constructor() { }

  ngOnInit(): void {

  }





}
