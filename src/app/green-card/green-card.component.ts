import { Component, OnInit } from '@angular/core';
import { apiService } from '../api.service';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent implements OnInit {
  userId;
  userData: any;
  constructor(private service: apiService) { }

  ngOnInit(): void {
  }

  getUserById() {
    if (this.userId) {
      let params = {
        userId: this.userId
      }
      this.service.getUserById(params).subscribe((resp) => {
        if(resp.data.length > 0){
          this.userData = resp.data[0];
          console.log(this.userData);
        }else {
          this.service.showError("User Not Found!")
          this.userData = null;
        }
      });
    }

  }

}
