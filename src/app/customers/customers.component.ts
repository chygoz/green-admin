import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  users: any;

  constructor(private service: apiService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.service.getUsers({}).subscribe((resp) => {
      console.log(resp);
      if(resp.status && resp.data[0]){
        this.users = resp.data;
      }
    })
  }

  deleteUser(userId){
    this.service.deleteUser({userId}).subscribe((resp) => {
      console.log(resp);
      if(resp.status){
        this.service.showSuccess(resp.msg);
      }else {
        this.service.showError(resp.msg);
      }
    })
  }
}
