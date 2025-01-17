import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
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
import { DatosComponent } from './perfil/datos/datos.component';
import { PagosComponent } from './perfil/pagos/pagos.component';
import { UpdateDatosComponent } from './perfil/update-datos/update-datos.component';
import { UpdatePasswordComponent } from './perfil/update-password/update-password.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoCarrerasComponent } from './info-carreras/info-carreras.component';
import { PolPrivacidadComponent } from './pol-privacidad/pol-privacidad.component';
import { PregFrecuentesComponent } from './preg-frecuentes/preg-frecuentes.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PruebaGratisComponent } from './prueba-gratis/prueba-gratis.component';
import { CodigoRefComponent } from './perfil/codigo-ref/codigo-ref.component';
import { CirculosComponent } from './perfil/circulos/circulos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'practicas', component: PracticasComponent},
  { path: 'practicas/algebra', component: AlgebraComponent},
  { path: 'practicas/anatomia', component: AnatomiaComponent},
  { path: 'practicas/aritmetica', component: AritmeticaComponent},
  { path: 'practicas/biologia', component: BiologiaComponent},
  { path: 'practicas/economia', component: EconomiaComponent},
  { path: 'practicas/ed-civica', component: EdCivicaComponent},
  { path: 'practicas/fisica', component: FisicaComponent},
  { path: 'practicas/geografia', component: GeografiaComponent},
  { path: 'practicas/geometria', component: GeometriaComponent},
  { path: 'practicas/historia-peru', component: HistoriaPeruComponent},
  { path: 'practicas/historia-universal', component: HistoriaUniversalComponent},
  { path: 'practicas/lenguaje', component: LenguajeComponent},
  { path: 'practicas/literatura', component: LiterarturaComponent},
  { path: 'practicas/quimica', component: QuimicaComponent},
  { path: 'practicas/raz-matematico', component: RazMatematicoComponent},
  { path: 'practicas/raz-verbal', component: RazVerbalComponent},
  { path: 'practicas/trigonometria', component: TrigonometriaComponent},

  { path: 'simulacros', component: SimulacrosComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'ranking', component: RankingComponent},
  { path: 'perfil', component: DatosComponent},
  { path: 'perfil/pagos', component: PagosComponent},
  { path: 'perfil/codigo', component: CodigoRefComponent},
  { path: 'perfil/circulos', component: CirculosComponent},
  { path: 'perfil/actualizar', component: UpdateDatosComponent},
  { path: 'perfil/actualizar-password', component: UpdatePasswordComponent},

  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'carreras', component: InfoCarrerasComponent},
  { path: 'politica-privacidad', component: PolPrivacidadComponent},
  { path: 'preguntas-frecuentes', component: PregFrecuentesComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'prueba-gratis', component: PruebaGratisComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
