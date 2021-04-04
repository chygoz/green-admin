import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userData;
  point_value;
  point_user;
  user_points;
  point_value_data;
  point_user_data;
  min_points;
  point_min_data;
  withdrawPointValueForm: FormGroup;
  userPointsValueForm: FormGroup;
  userPointsminForm: FormGroup;
  formSubmit: boolean = false;
  formSubmitUser: boolean = false;
  formSubmitminpoints: boolean = false;
  constructor(private cookieService: CookieService, private fb:
    FormBuilder, private service: apiService) {
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);

    this.point_value_data = this.cookieService.getCookie('point_value');
    this.point_value_data = JSON.parse(this.point_value_data);

    if (this.point_value_data) {
      this.point_value = this.point_value_data[0].point_value;
    }

    this.point_user_data = this.cookieService.getCookie('point_user');
    this.point_user_data = JSON.parse(this.point_user_data);

    if (this.point_user_data) {
      this.point_user = this.point_user_data[0].point_user;
    }

    this.point_min_data = this.cookieService.getCookie('min_points');
    this.point_min_data = JSON.parse(this.point_min_data);

    if (this.point_min_data) {
      this.min_points = this.point_min_data[0].min_points;
    }


  }

  ngOnInit(): void {
    this.withdrawPointValueForm = this.fb.group({
      point_value: [this.point_value, Validators.required],
    })
    this.userPointsValueForm = this.fb.group({
      point_user: [this.point_user, Validators.required],
    })
    this.userPointsminForm = this.fb.group({
      min_points: [this.min_points, Validators.required],
    })
  }


  get f() {
    return this.withdrawPointValueForm.controls;
  }
  get g() {
    return this.userPointsValueForm.controls;
  }
  get h() {
    return this.userPointsminForm.controls;
  }


  onSubmit() {

    this.formSubmit = true;

    if (!this.withdrawPointValueForm.valid) {
      return false;
    }
    this.service.insertPointValue(this.withdrawPointValueForm.value).subscribe((resp) => {
      if (resp.status) {
        this.cookieService.setCookie('point_value', JSON.stringify(resp.data), 1);
        this.service.showSuccess(resp.msg);
      } else {
        this.service.showError(resp.msg);
      }
    })

  }

  onSubmitValue() {

    this.formSubmitUser = true;

    if (!this.userPointsValueForm.valid) {
      return false;
    }
    this.service.insertPointUser(this.userPointsValueForm.value).subscribe((resp) => {
      if (resp.status) {

        this.cookieService.setCookie('point_user', JSON.stringify(resp.data), 1);
        this.service.showSuccess(resp.msg);
      } else {
        this.service.showError(resp.msg);
      }
    })

  }

  onSubmitminpoints() {

    this.formSubmitminpoints = true;

    if (!this.userPointsminForm.valid) {
      return false;
    }
    this.service.insertPointMin(this.userPointsminForm.value).subscribe((resp) => {
      if (resp.status) {

        this.cookieService.setCookie('min_points', JSON.stringify(resp.data), 1);
        this.service.showSuccess(resp.msg);
      } else {
        this.service.showError(resp.msg);
      }
    })

  }

}
