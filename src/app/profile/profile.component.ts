import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';
import * as _ from 'lodash';
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
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  profilepicdata: {};
  constructor(private cookieService: CookieService, private fb: FormBuilder, private service: apiService) {
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);
    this.cardImageBase64 = this.userData.profilepic;
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
      _id:['']
    })

    this.profileForm.patchValue(this.userData);
    // this.service.updateAdmin(this.profileForm.value).subscribe((resp) => {
    //   if (resp.status) {
    //     this.cookieService.setCookie('currentUser', JSON.stringify(resp.data), 1);
    //     this.service.showSuccess(resp.msg);
    //   } else {
    //     this.service.showError(resp.msg);
    //   }
    // })
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
        localStorage.setItem('currentUser', JSON.stringify(resp.data));
        this.service.showSuccess(resp.msg);
      } else {
        this.service.showError(resp.msg);
      }
    })

  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.isImageSaved = true;
            this.profilepicdata = { "_id": this.userData._id, "profile_pic": this.cardImageBase64 };

            this.service.updateProfilePic(this.profilepicdata).subscribe((resp) => {
              if (resp.status) {
                localStorage.setItem('currentUser', JSON.stringify(resp.data));
                this.service.showSuccess(resp.msg);
              } else {
                this.service.showError(resp.msg);
              }
            });

            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
