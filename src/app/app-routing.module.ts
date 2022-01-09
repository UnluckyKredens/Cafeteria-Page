import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import("./modules/dashboard/dashboard.module").then(d => d.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: () => import("./modules/products/products.module").then(p => p.ProductsModule)
      },
      {
        path: 'shop',
        loadChildren: () => import("./modules/shop/shop.module").then(s => s.ShopModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
