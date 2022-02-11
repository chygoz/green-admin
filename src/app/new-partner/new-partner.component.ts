import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { apiService } from '../api.service';
import { CookieService } from '../services/cookie.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.scss']
})
export class NewPartnerComponent implements OnInit {
  merchantForm: FormGroup;
  formSubmit: boolean = false;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64Edu: string;
  constructor(public fb: FormBuilder, private service: apiService, private toastr: ToastrService,
    public dialogRef: MatDialogRef<NewPartnerComponent>, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.merchantForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      Category: ['', Validators.required],
      type: ['', Validators.required],
      percentage: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }

  get f() {
    return this.merchantForm.controls;
  }

  fileChangeEventDocument(fileInput: any) {
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
        this.toastr.error(this.imageError, "Oops!");
        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        this.toastr.error(this.imageError, "Oops!");
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
            this.toastr.error(this.imageError, "Oops!");
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64Edu = imgBase64Path;
            this.isImageSaved = true;

            // this.employeeDetails.controls["idProof"].setValue(this.cardImageBase64);
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  onSubmit() {
    this.formSubmit = true;
    if (!this.merchantForm.valid) {
      return false;
    }
    this.merchantForm.value.photo = this.cardImageBase64Edu;
    this.service.createPartner(this.merchantForm.value).subscribe((resp) => {
      if (resp.status) {
        this.service.showSuccess(resp.msg);
        this.dialogRef.close();
      } else {
        this.service.showError(resp.msg);
      }
    })

  }

}
