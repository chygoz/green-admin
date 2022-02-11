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
    return this.http.post(config.api_url + 'admin/login', params);
  }

  register(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/register', params);
  }
  forgotpassword(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/forgotpassword', params);
  }
  resetPassword(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/resetPassword', params);
  }

  insertPointValue(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/insertpointvalue', params);
  }
  insertPointUser(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/insertPointUser', params);
  }
  insertPointMin(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/insertPointMin', params);
  }

  updateAdmin(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/updateAdmin', params, { headers });
  }

  createMerchant(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/addMerchant', params, { headers });
  }
  createPartner(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/addParner', params, { headers });
  }

  createOutlet(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/addOutlet', params, { headers });
  }

  getMerchants(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getMerchants', params, { headers });
  }
  getPartners(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getPartners', params, { headers });
  }

  deleteMerchant(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/deleteMerchant', params, { headers });
  }
  deletePartners(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/deletePartners', params, { headers });
  }

  getOutlets(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getOutlets', params, { headers });
  }

  deleteOutlet(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/deleteOutlet', params, { headers });
  }

  getStats(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getStats', params, { headers });
  }

  getUsers(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getUsers', params, { headers });
  }

  deleteUser(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/deleteuser', params, { headers });
  }

  blockUnblockUser(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/blockUnblockUser', params, { headers });
  }

  getUserById(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getUserById', params, { headers });
  }

  grantDiscount(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/grantDiscount', params, { headers });
  }

  getDiscounts(params = {}): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getDiscounts', params, { headers });
  }

  getNetworkByUserId(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getNetworkByUserId', params, { headers });
  }
  getWithdrawAmountAll(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getWithdrawAmountAll', params);
  }
  getWithdrawAmountRow(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getWithdrawAmountRow', params);
  }
  getSettingsData(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'user/getSettingsData', params);
  }
  ApprovedStatus(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/ApprovedStatus', params);
  }
  DesclineStatus(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/DesclineStatus', params);
  }
  getUsersData(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getUsersData', params);
  }
  getStoresData(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getStoresData', params);
  }
  getOutletData(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getOutletData', params);
  }
  getUserCardTypeData(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getUserCardTypeData', params);
  }

  updateProfilePic(params): Observable<any> {
    return this.http.post(config.api_url + 'admin/updateprofilepic', params);
  }

  getSubscribedUsersCount(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getSubscribedUsersCount', params, { headers });
  }

  getPlans(params): Observable<any> {
    let token = this.cookieService.getCookie('token');
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(config.api_url + 'admin/getPlans', params, { headers });
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