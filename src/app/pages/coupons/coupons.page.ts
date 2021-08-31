import { FireService } from '../../services/fire.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'coupons.page.html',
  styleUrls: ['coupons.page.scss']
})


export class Coupons {



  public coupons: any = [];


  constructor(private firestore:FireService) {

    firestore.GetAll('test').subscribe((data) => {
      this.coupons = data;
      console.log(this.coupons);
    });


  }

}
