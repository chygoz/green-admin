import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';
import { Observable, from } from 'rxjs';
import { CookieService } from './services/cookie.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
  })
  export class apiService {

    constructor(private http: HttpClient, private cookieService: CookieService, private toastr: ToastrService) { }

    login(params): Observable<any> {
        return this.http.post(config.api_url+'admin/login', params);
    }

    register(params): Observable<any> {
        return this.http.post(config.api_url+'admin/register', params);
    }

    createMerchant(params): Observable<any> {
      return this.http.post(config.api_url+'admin/addMerchant', params);
    }

    showSuccess(msg) {
      this.toastr.success(msg, '', {
        timeOut: 3000
      });
    }

    showError(msg) {
      this.toastr.error(msg, '', {
        timeOut: 3000
      });
    }

  }