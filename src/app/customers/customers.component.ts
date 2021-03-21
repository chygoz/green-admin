import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { apiService } from '../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  users: any;
  filter = '';

  constructor(private service: apiService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.service.getUsers({}).subscribe((resp) => {
      if(resp.status && resp.data[0]){
        this.users = resp.data;
      }
    })
  }

  deleteUser(userId){
    this.service.deleteUser({userId}).subscribe((resp) => {
      if(resp.status){
        this.service.showSuccess(resp.msg);
        this.getCustomers();
      }else {
        this.service.showError(resp.msg);
      }
    })
  }

  blockUnblockUser(userId, block){
    this.service.blockUnblockUser({userId, block}).subscribe((resp) => {
      if(resp.status){
        this.service.showSuccess(resp.msg);
        this.getCustomers();
      }else {
        this.service.showError(resp.msg);
      }
    })
  }
}
