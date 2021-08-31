import { Component } from '@angular/core';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {




  public coupons: any = [];


  constructor(private firestore:FireService) {

    firestore.GetAll('test').subscribe((data) => {
      this.coupons = data;
      console.log(this.coupons);
    });


  }

}
