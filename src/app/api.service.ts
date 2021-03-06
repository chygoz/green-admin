import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';
import { Observable, from } from 'rxjs';
import { CookieService } from './services/cookie.service';

@Injectable({
    providedIn: 'root',
  })
  export class apiService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }

    login(params): Observable<any> {
        return this.http.post(config.api_url+'admin/login', params);
    }

    register(params): Observable<any> {
        return this.http.post(config.api_url+'admin/register', params);
    }

  }