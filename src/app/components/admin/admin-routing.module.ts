import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { IndexUsuarioComponent } from './usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { IndexAlgebraComponent } from './cursos/algebra/index-algebra/index-algebra.component';
import { CreateAlgebraComponent } from './cursos/algebra/create-algebra/create-algebra.component';
import { EditAlgebraComponent } from './cursos/algebra/edit-algebra/edit-algebra.component';
import { IndexAnatomiaComponent } from './cursos/anatomia/index-anatomia/index-anatomia.component';
import { CreateAnatomiaComponent } from './cursos/anatomia/create-anatomia/create-anatomia.component';
import { EditAnatomiaComponent } from './cursos/anatomia/edit-anatomia/edit-anatomia.component';
import { IndexAritmeticaComponent } from './cursos/aritmetica/index-aritmetica/index-aritmetica.component';
import { CreateAritmeticaComponent } from './cursos/aritmetica/create-aritmetica/create-aritmetica.component';
import { EditAritmeticaComponent } from './cursos/aritmetica/edit-aritmetica/edit-aritmetica.component';
import { IndexBiologiaComponent } from './cursos/biologia/index-biologia/index-biologia.component';
import { CreateBiologiaComponent } from './cursos/biologia/create-biologia/create-biologia.component';
import { EditBiologiaComponent } from './cursos/biologia/edit-biologia/edit-biologia.component';
import { IndexEconomiaComponent } from './cursos/economia/index-economia/index-economia.component';
import { CreateEconomiaComponent } from './cursos/economia/create-economia/create-economia.component';
import { EditEconomiaComponent } from './cursos/economia/edit-economia/edit-economia.component';
import { IndexEdCivicaComponent } from './cursos/edCivica/index-ed-civica/index-ed-civica.component';
import { CreateEdCivicaComponent } from './cursos/edCivica/create-ed-civica/create-ed-civica.component';
import { IndexFisicaComponent } from './cursos/fisica/index-fisica/index-fisica.component';
import { CreateFisicaComponent } from './cursos/fisica/create-fisica/create-fisica.component';
import { EditFisicaComponent } from './cursos/fisica/edit-fisica/edit-fisica.component';
import { IndexGeografiaComponent } from './cursos/geografia/index-geografia/index-geografia.component';
import { CreateGeografiaComponent } from './cursos/geografia/create-geografia/create-geografia.component';
import { EditGeografiaComponent } from './cursos/geografia/edit-geografia/edit-geografia.component';
import { IndexGeometriaComponent } from './cursos/geometria/index-geometria/index-geometria.component';
import { CreateGeometriaComponent } from './cursos/geometria/create-geometria/create-geometria.component';
import { EditGeometriaComponent } from './cursos/geometria/edit-geometria/edit-geometria.component';
import { IndexHistoriaPeruComponent } from './cursos/historiaPeru/index-historia-peru/index-historia-peru.component';
import { CreateHistoriaPeruComponent } from './cursos/historiaPeru/create-historia-peru/create-historia-peru.component';
import { EditHistoriaPeruComponent } from './cursos/historiaPeru/edit-historia-peru/edit-historia-peru.component';
import { IndexHistoriaUniversalComponent } from './cursos/historiaUniversal/index-historia-universal/index-historia-universal.component';
import { CreateHistoriaUniversalComponent } from './cursos/historiaUniversal/create-historia-universal/create-historia-universal.component';
import { EditHistoriaUniversalComponent } from './cursos/historiaUniversal/edit-historia-universal/edit-historia-universal.component';
import { IndexLenguajeComponent } from './cursos/lenguaje/index-lenguaje/index-lenguaje.component';
import { CreateLenguajeComponent } from './cursos/lenguaje/create-lenguaje/create-lenguaje.component';
import { EditLenguajeComponent } from './cursos/lenguaje/edit-lenguaje/edit-lenguaje.component';
import { IndexLiteraturaComponent } from './cursos/literatura/index-literatura/index-literatura.component';
import { CreateLiteraturaComponent } from './cursos/literatura/create-literatura/create-literatura.component';
import { EditLiteraturaComponent } from './cursos/literatura/edit-literatura/edit-literatura.component';
import { IndexQuimicaComponent } from './cursos/quimica/index-quimica/index-quimica.component';
import { CreateQuimicaComponent } from './cursos/quimica/create-quimica/create-quimica.component';
import { EditQuimicaComponent } from './cursos/quimica/edit-quimica/edit-quimica.component';
import { IndexRazMatematicoComponent } from './cursos/razMatematico/index-raz-matematico/index-raz-matematico.component';
import { CreateRazMatematicoComponent } from './cursos/razMatematico/create-raz-matematico/create-raz-matematico.component';
import { EditRazMatematicoComponent } from './cursos/razMatematico/edit-raz-matematico/edit-raz-matematico.component';
import { IndexRazVerbalComponent } from './cursos/razVerbal/index-raz-verbal/index-raz-verbal.component';
import { CreateRazVerbalComponent } from './cursos/razVerbal/create-raz-verbal/create-raz-verbal.component';
import { EditRazVerbalComponent } from './cursos/razVerbal/edit-raz-verbal/edit-raz-verbal.component';
import { IndexTrigonometriaComponent } from './cursos/trigonometria/index-trigonometria/index-trigonometria.component';
import { CreateTrigonometriaComponent } from './cursos/trigonometria/create-trigonometria/create-trigonometria.component';
import { EditTrigonometriaComponent } from './cursos/trigonometria/edit-trigonometria/edit-trigonometria.component';
import { EditEdCivicaComponent } from './cursos/edCivica/edit-ed-civica/edit-ed-civica.component';
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

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'ranking-curso', component: RankingCursoComponent },

  { path: 'pagos', component: PagosComponent },
  { path: 'pagos/:id', component: DetallePagoComponent },

  //Cuentas
  { path: 'circulos', component: IndexCirculoComponent },
  { path: 'circulos/registrar', component: CreateCirculoComponent },
  { path: 'circulos/:id', component: EditCirculoComponent },

  //Cuentas
  { path: 'cuentas', component: IndexCuentasComponent },
  { path: 'cuentas/registrar', component: CreateCuentasComponent },
  { path: 'cuentas/:id', component: EditCuentasComponent },

  { path: 'usuarios', component: IndexUsuarioComponent },
  { path: 'usuarios/registrar', component: CreateUsuarioComponent },
  { path: 'usuarios/:id', component: EditUsuarioComponent },

  { path: 'mensajes', component: MensajesComponent },
  { path: 'reviews', component: ReviewsComponent },

  //Álgebra
  { path: 'algebra', component:  IndexAlgebraComponent},
  { path: 'algebra/registrar', component:  CreateAlgebraComponent},
  { path: 'algebra/:id', component:  EditAlgebraComponent},
  
  //Anatomía
  { path: 'anatomia', component:  IndexAnatomiaComponent},
  { path: 'anatomia/registrar', component:  CreateAnatomiaComponent},
  { path: 'anatomia/:id', component:  EditAnatomiaComponent},

  //Aritmética
  { path: 'aritmetica', component:  IndexAritmeticaComponent},
  { path: 'aritmetica/registrar', component:  CreateAritmeticaComponent},
  { path: 'aritmetica/:id', component:  EditAritmeticaComponent},

  //Biología
  { path: 'biologia', component:  IndexBiologiaComponent},
  { path: 'biologia/registrar', component:  CreateBiologiaComponent},
  { path: 'biologia/:id', component:  EditBiologiaComponent},

  //Economía
  { path: 'economia', component:  IndexEconomiaComponent},
  { path: 'economia/registrar', component:  CreateEconomiaComponent},
  { path: 'economia/:id', component:  EditEconomiaComponent},

  //Educación cívica
  { path: 'ed-civica', component:  IndexEdCivicaComponent},
  { path: 'ed-civica/registrar', component:  CreateEdCivicaComponent},
  { path: 'ed-civica/:id', component:  EditEdCivicaComponent},

  //Física
  { path: 'fisica', component:  IndexFisicaComponent},
  { path: 'fisica/registrar', component:  CreateFisicaComponent},
  { path: 'fisica/:id', component:  EditFisicaComponent},

  //Geografía
  { path: 'geografia', component:  IndexGeografiaComponent},
  { path: 'geografia/registrar', component:  CreateGeografiaComponent},
  { path: 'geografia/:id', component:  EditGeografiaComponent},

  //Geometría
  { path: 'geometria', component:  IndexGeometriaComponent},
  { path: 'geometria/registrar', component:  CreateGeometriaComponent},
  { path: 'geometria/:id', component:  EditGeometriaComponent},

  //Historia del Perú
  { path: 'historia-peru', component:  IndexHistoriaPeruComponent},
  { path: 'historia-peru/registrar', component:  CreateHistoriaPeruComponent},
  { path: 'historia-peru/:id', component:  EditHistoriaPeruComponent},

  //Historia universal
  { path: 'historia-universal', component:  IndexHistoriaUniversalComponent},
  { path: 'historia-universal/registrar', component:  CreateHistoriaUniversalComponent},
  { path: 'historia-universal/:id', component:  EditHistoriaUniversalComponent},

  //Lenguaje
  { path: 'lenguaje', component:  IndexLenguajeComponent},
  { path: 'lenguaje/registrar', component:  CreateLenguajeComponent},
  { path: 'lenguaje/:id', component:  EditLenguajeComponent},

  //Literatura
  { path: 'literatura', component:  IndexLiteraturaComponent},
  { path: 'literatura/registrar', component:  CreateLiteraturaComponent},
  { path: 'literatura/:id', component:  EditLiteraturaComponent},

  //Química
  { path: 'quimica', component:  IndexQuimicaComponent},
  { path: 'quimica/registrar', component:  CreateQuimicaComponent},
  { path: 'quimica/:id', component:  EditQuimicaComponent},

  //Razonamiento Matemático
  { path: 'raz-matematico', component:  IndexRazMatematicoComponent},
  { path: 'raz-matematico/registrar', component:  CreateRazMatematicoComponent},
  { path: 'raz-matematico/:id', component:  EditRazMatematicoComponent},

  //Razonamiento Verbal
  { path: 'raz-verbal', component:  IndexRazVerbalComponent},
  { path: 'raz-verbal/registrar', component:  CreateRazVerbalComponent},
  { path: 'raz-verbal/:id', component:  EditRazVerbalComponent},

  //Trigonometría
  { path: 'trigonometria', component:  IndexTrigonometriaComponent},
  { path: 'trigonometria/registrar', component:  CreateTrigonometriaComponent},
  { path: 'trigonometria/:id', component:  EditTrigonometriaComponent},

  { path: '**', redirectTo: '/admin'},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
