import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData;
  profileForm: FormGroup;
  formSubmit: boolean = false;
  constructor(private cookieService: CookieService, private fb: FormBuilder) {
    this.userData = this.cookieService.getCookie('currentUser');
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
   }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: [''],
      state: [''],
      zipCode: [''],
      country: [''],
      address: [''],
    })

    this.profileForm.patchValue(this.userData);
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.formSubmit = true;
    if(!this.profileForm.valid){
      return false;
    }

  }

}
