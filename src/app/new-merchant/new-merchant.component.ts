import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.component.html',
  styleUrls: ['./new-merchant.component.scss']
})
export class NewMerchantComponent implements OnInit {
  merchantForm: FormGroup;
  formSubmit: boolean = false;
  public emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public fb: FormBuilder, private service: apiService, private cookieService: CookieService) { }

  ngOnInit(): void {
    //storeName, email, phoneNumber, userName, password
    this.merchantForm = this.fb.group({
      storeName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailregex)]],
      phoneNumber: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  get f() {
    return this.merchantForm.controls;
  }

  onSubmit(){
    this.formSubmit = true;
    this.service.showError("this is error")
    if(!this.merchantForm.valid){
      return false;
    }

    this.service.createMerchant(this.merchantForm.value).subscribe((resp) => {
      if(resp.status){
        this.service.showSuccess(resp.msg);
      }else {
        this.service.showError(resp.msg);
      }
    })

    console.log(this.merchantForm.value);
  }


}
