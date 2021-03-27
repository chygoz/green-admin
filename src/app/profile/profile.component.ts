import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  userData;
  profileForm: FormGroup;
  formSubmit: boolean = false;
  constructor(private cookieService: CookieService, private fb: FormBuilder, private service: apiService) {
    this.userData = this.cookieService.getCookie('currentUser');
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      mobile: ['', Validators.required],
      city: [''],
      state: [''],
      zipCode: [''],
      country: [''],
      address: [''],
    })

    this.profileForm.patchValue(this.userData);
    this.service.updateAdmin(this.profileForm.value).subscribe((resp) => {
      if (resp.status) {
        this.cookieService.setCookie('currentUser', JSON.stringify(resp.data), 1);
        this.service.showSuccess(resp.msg);
      } else {
        this.service.showError(resp.msg);
      }
    })
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {

    this.formSubmit = true;
    if (!this.profileForm.valid) {
      return false;
    }
    this.profileForm.value._id = this.userData._id;
    this.service.updateAdmin(this.profileForm.value).subscribe((resp) => {
      if (resp.status) {
        this.cookieService.setCookie('currentUser', JSON.stringify(resp.data), 1);
        this.service.showSuccess(resp.msg);
      } else {
        this.service.showError(resp.msg);
      }
    })

  }

}
