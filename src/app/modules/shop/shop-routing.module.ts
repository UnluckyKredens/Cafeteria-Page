import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPresenterComponent } from './presenter/shop-presenter/shop-presenter.component';

const routes: Routes = [
  {
    path: '',
    component: ShopPresenterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
