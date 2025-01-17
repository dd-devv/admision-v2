import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PruebaGratisComponent } from './prueba-gratis/prueba-gratis.component';
import { FormsModule } from '@angular/forms';
import { PolPrivacidadComponent } from './pol-privacidad/pol-privacidad.component';
import { InfoCarrerasComponent } from './info-carreras/info-carreras.component';
import { PregFrecuentesComponent } from './preg-frecuentes/preg-frecuentes.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    PruebaGratisComponent,
    PolPrivacidadComponent,
    InfoCarrerasComponent,
    PregFrecuentesComponent,
    ReviewsComponent,
    ForgotPassComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent
  ]
})
export class MainModule { }
