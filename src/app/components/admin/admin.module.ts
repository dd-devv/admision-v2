import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { IndexUsuarioComponent } from './usuarios/index-usuario/index-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { FormsModule } from '@angular/forms';
import { IndexAlgebraComponent } from './cursos/algebra/index-algebra/index-algebra.component';
import { CreateAlgebraComponent } from './cursos/algebra/create-algebra/create-algebra.component';
import { EditAlgebraComponent } from './cursos/algebra/edit-algebra/edit-algebra.component';
import { IndexAnatomiaComponent } from './cursos/anatomia/index-anatomia/index-anatomia.component';
import { CreateAnatomiaComponent } from './cursos/anatomia/create-anatomia/create-anatomia.component';
import { EditAnatomiaComponent } from './cursos/anatomia/edit-anatomia/edit-anatomia.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateAritmeticaComponent } from './cursos/aritmetica/create-aritmetica/create-aritmetica.component';
import { EditAritmeticaComponent } from './cursos/aritmetica/edit-aritmetica/edit-aritmetica.component';
import { IndexAritmeticaComponent } from './cursos/aritmetica/index-aritmetica/index-aritmetica.component';
import { CreateBiologiaComponent } from './cursos/biologia/create-biologia/create-biologia.component';
import { EditBiologiaComponent } from './cursos/biologia/edit-biologia/edit-biologia.component';
import { IndexBiologiaComponent } from './cursos/biologia/index-biologia/index-biologia.component';
import { CreateEconomiaComponent } from './cursos/economia/create-economia/create-economia.component';
import { EditEconomiaComponent } from './cursos/economia/edit-economia/edit-economia.component';
import { IndexEconomiaComponent } from './cursos/economia/index-economia/index-economia.component';
import { CreateEdCivicaComponent } from './cursos/edCivica/create-ed-civica/create-ed-civica.component';
import { EditEdCivicaComponent } from './cursos/edCivica/edit-ed-civica/edit-ed-civica.component';
import { IndexEdCivicaComponent } from './cursos/edCivica/index-ed-civica/index-ed-civica.component';
import { CreateFisicaComponent } from './cursos/fisica/create-fisica/create-fisica.component';
import { EditFisicaComponent } from './cursos/fisica/edit-fisica/edit-fisica.component';
import { IndexFisicaComponent } from './cursos/fisica/index-fisica/index-fisica.component';
import { CreateGeografiaComponent } from './cursos/geografia/create-geografia/create-geografia.component';
import { EditGeografiaComponent } from './cursos/geografia/edit-geografia/edit-geografia.component';
import { IndexGeografiaComponent } from './cursos/geografia/index-geografia/index-geografia.component';
import { CreateGeometriaComponent } from './cursos/geometria/create-geometria/create-geometria.component';
import { EditGeometriaComponent } from './cursos/geometria/edit-geometria/edit-geometria.component';
import { IndexGeometriaComponent } from './cursos/geometria/index-geometria/index-geometria.component';
import { CreateHistoriaPeruComponent } from './cursos/historiaPeru/create-historia-peru/create-historia-peru.component';
import { EditHistoriaPeruComponent } from './cursos/historiaPeru/edit-historia-peru/edit-historia-peru.component';
import { IndexHistoriaPeruComponent } from './cursos/historiaPeru/index-historia-peru/index-historia-peru.component';
import { CreateHistoriaUniversalComponent } from './cursos/historiaUniversal/create-historia-universal/create-historia-universal.component';
import { EditHistoriaUniversalComponent } from './cursos/historiaUniversal/edit-historia-universal/edit-historia-universal.component';
import { IndexHistoriaUniversalComponent } from './cursos/historiaUniversal/index-historia-universal/index-historia-universal.component';
import { CreateLenguajeComponent } from './cursos/lenguaje/create-lenguaje/create-lenguaje.component';
import { EditLenguajeComponent } from './cursos/lenguaje/edit-lenguaje/edit-lenguaje.component';
import { IndexLenguajeComponent } from './cursos/lenguaje/index-lenguaje/index-lenguaje.component';
import { CreateLiteraturaComponent } from './cursos/literatura/create-literatura/create-literatura.component';
import { EditLiteraturaComponent } from './cursos/literatura/edit-literatura/edit-literatura.component';
import { IndexLiteraturaComponent } from './cursos/literatura/index-literatura/index-literatura.component';
import { CreateQuimicaComponent } from './cursos/quimica/create-quimica/create-quimica.component';
import { EditQuimicaComponent } from './cursos/quimica/edit-quimica/edit-quimica.component';
import { IndexQuimicaComponent } from './cursos/quimica/index-quimica/index-quimica.component';
import { CreateRazMatematicoComponent } from './cursos/razMatematico/create-raz-matematico/create-raz-matematico.component';
import { EditRazMatematicoComponent } from './cursos/razMatematico/edit-raz-matematico/edit-raz-matematico.component';
import { IndexRazMatematicoComponent } from './cursos/razMatematico/index-raz-matematico/index-raz-matematico.component';
import { CreateRazVerbalComponent } from './cursos/razVerbal/create-raz-verbal/create-raz-verbal.component';
import { EditRazVerbalComponent } from './cursos/razVerbal/edit-raz-verbal/edit-raz-verbal.component';
import { IndexRazVerbalComponent } from './cursos/razVerbal/index-raz-verbal/index-raz-verbal.component';
import { CreateTrigonometriaComponent } from './cursos/trigonometria/create-trigonometria/create-trigonometria.component';
import { EditTrigonometriaComponent } from './cursos/trigonometria/edit-trigonometria/edit-trigonometria.component';
import { IndexTrigonometriaComponent } from './cursos/trigonometria/index-trigonometria/index-trigonometria.component';
import { PagosComponent } from './pagos/pagos.component';
import { DetallePagoComponent } from './detalle-pago/detalle-pago.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RankingCursoComponent } from './ranking-curso/ranking-curso.component';
import { IndexCuentasComponent } from './cuentas/index-cuentas/index-cuentas.component';
import { CreateCuentasComponent } from './cuentas/create-cuentas/create-cuentas.component';
import { EditCuentasComponent } from './cuentas/edit-cuentas/edit-cuentas.component';
import { IndexCirculoComponent } from './circulos/index-circulo/index-circulo.component';
import { CreateCirculoComponent } from './circulos/create-circulo/create-circulo.component';
import { EditCirculoComponent } from './circulos/edit-circulo/edit-circulo.component';

@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    InicioComponent,
    ResultadosComponent,
    IndexUsuarioComponent,
    EditUsuarioComponent,
    CreateUsuarioComponent,
    IndexAlgebraComponent,
    CreateAlgebraComponent,
    EditAlgebraComponent,
    IndexAnatomiaComponent,
    CreateAnatomiaComponent,
    EditAnatomiaComponent,
    CreateAritmeticaComponent,
    EditAritmeticaComponent,
    IndexAritmeticaComponent,
    CreateBiologiaComponent,
    EditBiologiaComponent,
    IndexBiologiaComponent,
    CreateEconomiaComponent,
    EditEconomiaComponent,
    IndexEconomiaComponent,
    CreateEdCivicaComponent,
    EditEdCivicaComponent,
    IndexEdCivicaComponent,
    CreateFisicaComponent,
    EditFisicaComponent,
    IndexFisicaComponent,
    CreateGeografiaComponent,
    EditGeografiaComponent,
    IndexGeografiaComponent,
    CreateGeometriaComponent,
    EditGeometriaComponent,
    IndexGeometriaComponent,
    CreateHistoriaPeruComponent,
    EditHistoriaPeruComponent,
    IndexHistoriaPeruComponent,
    CreateHistoriaUniversalComponent,
    EditHistoriaUniversalComponent,
    IndexHistoriaUniversalComponent,
    CreateLenguajeComponent,
    EditLenguajeComponent,
    IndexLenguajeComponent,
    CreateLiteraturaComponent,
    EditLiteraturaComponent,
    IndexLiteraturaComponent,
    CreateQuimicaComponent,
    EditQuimicaComponent,
    IndexQuimicaComponent,
    CreateRazMatematicoComponent,
    EditRazMatematicoComponent,
    IndexRazMatematicoComponent,
    CreateRazVerbalComponent,
    EditRazVerbalComponent,
    IndexRazVerbalComponent,
    CreateTrigonometriaComponent,
    EditTrigonometriaComponent,
    IndexTrigonometriaComponent,
    PagosComponent,
    DetallePagoComponent,
    MensajesComponent,
    ReviewsComponent,
    RankingCursoComponent,
    IndexCuentasComponent,
    CreateCuentasComponent,
    EditCuentasComponent,
    IndexCirculoComponent,
    CreateCirculoComponent,
    EditCirculoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxTinymceModule.forRoot({
      baseURL: '../../../assets/tinymce/'
    }),
    NgxPaginationModule
  ]
})
export class AdminModule { }
