import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './components/shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
import { MainModule } from './components/main/main.module';
import { ToastrModule } from 'ngx-toastr';
import { UserRoutingModule } from './components/user/user-routing.module';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    UserModule,
    MainModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    UserRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
