import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsContainerComponent } from './container/products-container/products-container.component';
import { ProductsHeaderPresenterComponent } from './presenter/products-header-presenter/products-header-presenter.component';
import { ProductDescriptionPresenterComponent } from './presenter/product-description-presenter/product-description-presenter.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule 
  ],
  declarations: [ProductsContainerComponent, ProductsHeaderPresenterComponent, ProductDescriptionPresenterComponent]
})
export class ProductsModule { }
