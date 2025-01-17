import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VerificarComponent } from './verificar/verificar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerificarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
