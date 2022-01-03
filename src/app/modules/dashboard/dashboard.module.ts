import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { DashboardDescriptionPresenterComponent } from './presenter/dashboard-description-presenter/dashboard-description-presenter.component';
import { DashboardHeaderPresenterComponent } from './presenter/dashboard-header-presenter/dashboard-header-presenter.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  declarations: [DashboardContainerComponent, DashboardDescriptionPresenterComponent, DashboardHeaderPresenterComponent]
})
export class DashboardModule { }
