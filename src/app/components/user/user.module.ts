import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { NavComponent } from './nav/nav.component';
import { UserRoutingModule } from './user-routing.module';
import { PracticasComponent } from './practicas/practicas.component';
import { SimulacrosComponent } from './simulacros/simulacros.component';
import { HistorialComponent } from './historial/historial.component';
import { RankingComponent } from './ranking/ranking.component';
import { AlgebraComponent } from './practicas/algebra/algebra.component';
import { AnatomiaComponent } from './practicas/anatomia/anatomia.component';
import { AritmeticaComponent } from './practicas/aritmetica/aritmetica.component';
import { BiologiaComponent } from './practicas/biologia/biologia.component';
import { EconomiaComponent } from './practicas/economia/economia.component';
import { EdCivicaComponent } from './practicas/ed-civica/ed-civica.component';
import { FisicaComponent } from './practicas/fisica/fisica.component';
import { GeografiaComponent } from './practicas/geografia/geografia.component';
import { GeometriaComponent } from './practicas/geometria/geometria.component';
import { HistoriaPeruComponent } from './practicas/historia-peru/historia-peru.component';
import { HistoriaUniversalComponent } from './practicas/historia-universal/historia-universal.component';
import { LenguajeComponent } from './practicas/lenguaje/lenguaje.component';
import { LiterarturaComponent } from './practicas/literartura/literartura.component';
import { QuimicaComponent } from './practicas/quimica/quimica.component';
import { RazMatematicoComponent } from './practicas/raz-matematico/raz-matematico.component';
import { RazVerbalComponent } from './practicas/raz-verbal/raz-verbal.component';
import { TrigonometriaComponent } from './practicas/trigonometria/trigonometria.component';
import { SidebarComponent } from './perfil/sidebar/sidebar.component';
import { DatosComponent } from './perfil/datos/datos.component';
import { PagosComponent } from './perfil/pagos/pagos.component';
import { UpdateDatosComponent } from './perfil/update-datos/update-datos.component';
import { FormsModule } from '@angular/forms';
import { UpdatePasswordComponent } from './perfil/update-password/update-password.component';
import { InfoCarrerasComponent } from './info-carreras/info-carreras.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PolPrivacidadComponent } from './pol-privacidad/pol-privacidad.component';
import { PregFrecuentesComponent } from './preg-frecuentes/preg-frecuentes.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PruebaGratisComponent } from './prueba-gratis/prueba-gratis.component';
import { CodigoRefComponent } from './perfil/codigo-ref/codigo-ref.component';
import { CirculosComponent } from './perfil/circulos/circulos.component';



@NgModule({
  declarations: [
    InicioComponent,
    NavComponent,
    PracticasComponent,
    SimulacrosComponent,
    HistorialComponent,
    RankingComponent,
    AlgebraComponent,
    AnatomiaComponent,
    AritmeticaComponent,
    BiologiaComponent,
    EconomiaComponent,
    EdCivicaComponent,
    FisicaComponent,
    GeografiaComponent,
    GeometriaComponent,
    HistoriaPeruComponent,
    HistoriaUniversalComponent,
    LenguajeComponent,
    LiterarturaComponent,
    QuimicaComponent,
    RazMatematicoComponent,
    RazVerbalComponent,
    TrigonometriaComponent,
    SidebarComponent,
    DatosComponent,
    PagosComponent,
    UpdateDatosComponent,
    UpdatePasswordComponent,
    InfoCarrerasComponent,
    NosotrosComponent,
    ContactoComponent,
    PolPrivacidadComponent,
    PregFrecuentesComponent,
    ReviewsComponent,
    PruebaGratisComponent,
    CodigoRefComponent,
    CirculosComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgxTinymceModule.forRoot({
      baseURL: '../../../assets/tinymce/'
    }),
    NgxPaginationModule
  ]
})
export class UserModule { }
