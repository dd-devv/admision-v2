import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NosotrosComponent } from './components/main/nosotros/nosotros.component';
import { ContactoComponent } from './components/main/contacto/contacto.component';
import { AuthUserGuard } from './guards/auth-user.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { PruebaGratisComponent } from './components/main/prueba-gratis/prueba-gratis.component';
import { PolPrivacidadComponent } from './components/main/pol-privacidad/pol-privacidad.component';
import { InfoCarrerasComponent } from './components/main/info-carreras/info-carreras.component';
import { PregFrecuentesComponent } from './components/main/preg-frecuentes/preg-frecuentes.component';
import { ReviewsComponent } from './components/main/reviews/reviews.component';
import { VerificarComponent } from './components/auth/verificar/verificar.component';
import { ForgotPassComponent } from './components/main/forgot-pass/forgot-pass.component';
import { ChangePasswordComponent } from './components/main/change-password/change-password.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'prueba-gratis', component: PruebaGratisComponent},
  {path: 'carreras', component: InfoCarrerasComponent},
  {path: 'preguntas-frecuentes', component: PregFrecuentesComponent},
  {path: 'politica-privacidad', component: PolPrivacidadComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'verificar', component: VerificarComponent},
  {path: 'forgot-password', component: ForgotPassComponent},
  {path: 'change-password/:token', component: ChangePasswordComponent},

  //Lazy load de modulo de usuario
  {
    path: 'usuario',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
    canActivate: [AuthUserGuard]
  },

  //Lazy load de modulo de ADMIN
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthAdminGuard]
  },

  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
