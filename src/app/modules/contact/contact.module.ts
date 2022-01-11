import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactContainerComponent } from './container/contact-container/contact-container.component';
import { ContactPresenterComponent } from './presenter/contact-presenter/contact-presenter.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule
  ],
  declarations: [ContactContainerComponent, ContactPresenterComponent]
})
export class ContactModule { }
