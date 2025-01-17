import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ScrollTopComponent
  ]
})
export class SharedModule { }
