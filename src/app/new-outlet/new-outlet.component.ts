import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';

export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-new-outlet',
  templateUrl: './new-outlet.component.html',
  styleUrls: ['./new-outlet.component.scss']
})
export class NewOutletComponent implements OnInit {
  outletForm: FormGroup;
  formSubmit: boolean = false;
  merchants = [];
  userData;
  id: number;
  public emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(public fb: FormBuilder, private service: apiService, public dialogRef: MatDialogRef<NewOutletComponent>, private cookieService: CookieService) {
    this.userData = this.cookieService.getCookie('currentUser');
    this.userData = JSON.parse(this.userData);
    if (this.userData.role == "merchant") {
      this.id = this.userData._id;
    }
  }

  ngOnInit(): void {
    this.outletForm = this.fb.group({
      storeName: [''],
      email: ['', [Validators.required, Validators.pattern(this.emailregex)]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });

    this.getMerchants();

  }

  getMerchants() {
    this.service.getMerchants({}).subscribe((resp) => {
      if (resp.status) {
        this.merchants = resp.data;
        console.log(this.merchants);
      }

    })
  }

  get f() {
    return this.outletForm.controls;
  }

  onSubmit() {
    this.formSubmit = true;
    if (!this.outletForm.valid) {
      return false;
    }
    if (this.userData.role == "merchant") {
      this.outletForm.value.storeName = this.id;

    }
    this.service.createOutlet(this.outletForm.value).subscribe((resp) => {
      if (resp.status) {
        this.service.showSuccess(resp.msg);

        this.dialogRef.close();
      } else {
        this.service.showError(resp.msg);
      }
    })

    console.log(this.outletForm.value);
  }

}
