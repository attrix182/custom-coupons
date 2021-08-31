import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Coupons } from './coupons.page';

const routes: Routes = [
  {
    path: '',
    component: Coupons,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ExploreContainerComponentModule],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
