import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPresenterComponent } from './presenter/shop-presenter/shop-presenter.component';
import { ShopContainerComponent } from './container/shop-container/shop-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShopRoutingModule } from './shop-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ShopRoutingModule
  ],
  declarations: [ShopPresenterComponent, ShopContainerComponent]
})
export class ShopModule { }
