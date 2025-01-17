import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-ranking-curso',
  templateUrl: './ranking-curso.component.html',
  styleUrls: ['./ranking-curso.component.css']
})
export class RankingCursoComponent implements OnInit {

  public load_data = true;
  public token: any;
  pAlg: number = 1;
  pAnat: number = 1;
  pArit: number = 1;
  pBio: number = 1;
  pEco: number = 1;
  pEdCiv: number = 1;
  pFis: number = 1;
  pGeog: number = 1;
  pGeom: number = 1;
  pHP: number = 1;
  pHU: number = 1;
  pLeng: number = 1;
  pLit: number = 1;
  pQuim: number = 1;
  pRM: number = 1;
  pRV: number = 1;
  pTrig: number = 1;

  public resultados: Array<any> = [];
  public resultadosAlgebra: Array<any> = [];
  public resultadosAnatomia: Array<any> = [];
  public resultadosAritmetica: Array<any> = [];
  public resultadosBiologia: Array<any> = [];
  public resultadosEconomia: Array<any> = [];
  public resultadosEdCivica: Array<any> = [];
  public resultadosFisica: Array<any> = [];
  public resultadosGeografia: Array<any> = [];
  public resultadosGeometria: Array<any> = [];
  public resultadosHistoriaPeru: Array<any> = [];
  public resultadosHistoriaUniv: Array<any> = [];
  public resultadosLenguaje: Array<any> = [];
  public resultadosLiteratura: Array<any> = [];
  public resultadosQuimica: Array<any> = [];
  public resultadosRazMatematico: Array<any> = [];
  public resultadosRazVerbal: Array<any> = [];
  public resultadosTrigonometria: Array<any> = [];

  public resultadosPracticaAlgebra: Array<any> = [];
  public resultadosPracticaAnatomia: Array<any> = [];
  public resultadosPracticaAritmetica: Array<any> = [];
  public resultadosPracticaBiologia: Array<any> = [];
  public resultadosPracticaEconomia: Array<any> = [];
  public resultadosPracticaEdCivica: Array<any> = [];
  public resultadosPracticaFisica: Array<any> = [];
  public resultadosPracticaGeografia: Array<any> = [];
  public resultadosPracticaGeometria: Array<any> = [];
  public resultadosPracticaHistoriaPeru: Array<any> = [];
  public resultadosPracticaHistoriaUniv: Array<any> = [];
  public resultadosPracticaLenguaje: Array<any> = [];
  public resultadosPracticaLiteratura: Array<any> = [];
  public resultadosPracticaQuimica: Array<any> = [];
  public resultadosPracticaRazMatematico: Array<any> = [];
  public resultadosPracticaRazVerbal: Array<any> = [];
  public resultadosPracticaTrigonometria: Array<any> = [];
  public sumatoria = 0;

  constructor(
    private _userService: UserService,
    private _title: Title
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');

    this.init_data();
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Ranking por cursos');
  }

  init_data() {
    this._userService.obtener_resultados_practica_admin(this.token).subscribe(
      response => {
        this.resultados = response.data;
        this.resultadosAlgebra = this.resultados[0];
        this.resultadosAnatomia = this.resultados[1];
        this.resultadosAritmetica = this.resultados[2];
        this.resultadosBiologia = this.resultados[3];
        this.resultadosEconomia = this.resultados[4];
        this.resultadosEdCivica = this.resultados[5];
        this.resultadosFisica = this.resultados[6];
        this.resultadosGeografia = this.resultados[7];
        this.resultadosGeometria = this.resultados[8];
        this.resultadosHistoriaPeru = this.resultados[9];
        this.resultadosHistoriaUniv = this.resultados[10];
        this.resultadosLenguaje = this.resultados[11];
        this.resultadosLiteratura = this.resultados[12];
        this.resultadosQuimica = this.resultados[13];
        this.resultadosRazMatematico = this.resultados[14];
        this.resultadosRazVerbal = this.resultados[15];
        this.resultadosTrigonometria = this.resultados[16];

        this.load_data = false;
      }
    );
  }

  obtener_resultados_algebra(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_algebra(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaAlgebra = response.data;

        if (this.resultadosPracticaAlgebra.length > 0) {
          for (let i = 0; i < this.resultadosPracticaAlgebra.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaAlgebra[i].puntos;
          }
        }
      });
  }

  obtener_resultados_anatomia(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_anatomia(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaAnatomia = response.data;

        if (this.resultadosPracticaAnatomia.length > 0) {
          for (let i = 0; i < this.resultadosPracticaAnatomia.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaAnatomia[i].puntos;
          }
        }
      });
  }

  obtener_resultados_aritmetica(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_aritmetica(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaAritmetica = response.data;

        if (this.resultadosPracticaAritmetica.length > 0) {
          for (let i = 0; i < this.resultadosPracticaAritmetica.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaAritmetica[i].puntos;
          }
        }
      });
  }

  obtener_resultados_biologia(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_biologia(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaBiologia = response.data;

        if (this.resultadosPracticaBiologia.length > 0) {
          for (let i = 0; i < this.resultadosPracticaBiologia.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaBiologia[i].puntos;
          }
        }
      });
  }

  obtener_resultados_economia(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_economia(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaEconomia = response.data;

        if (this.resultadosPracticaEconomia.length > 0) {
          for (let i = 0; i < this.resultadosPracticaEconomia.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaEconomia[i].puntos;
          }
        }
      });
  }

  obtener_resultados_edCivica(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_ed_civica(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaEdCivica = response.data;

        if (this.resultadosPracticaEdCivica.length > 0) {
          for (let i = 0; i < this.resultadosPracticaEdCivica.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaEdCivica[i].puntos;
          }
        }
      });
  }

  obtener_resultados_fisica(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_fisica(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaFisica = response.data;

        if (this.resultadosPracticaFisica.length > 0) {
          for (let i = 0; i < this.resultadosPracticaFisica.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaFisica[i].puntos;
          }
        }
      });
  }

  obtener_resultados_geografia(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_geografia(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaGeografia = response.data;

        if (this.resultadosPracticaGeografia.length > 0) {
          for (let i = 0; i < this.resultadosPracticaGeografia.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaGeografia[i].puntos;
          }
        }
      });
  }

  obtener_resultados_geometria(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_geometria(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaGeometria = response.data;

        if (this.resultadosPracticaGeometria.length > 0) {
          for (let i = 0; i < this.resultadosPracticaGeometria.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaGeometria[i].puntos;
          }
        }
      });
  }

  obtener_resultados_historia_peru(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_historia_peru(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaHistoriaPeru = response.data;

        if (this.resultadosPracticaHistoriaPeru.length > 0) {
          for (let i = 0; i < this.resultadosPracticaHistoriaPeru.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaHistoriaPeru[i].puntos;
          }
        }
      });
  }

  obtener_resultados_historia_universal(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_historia_universal(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaHistoriaUniv = response.data;

        if (this.resultadosPracticaHistoriaUniv.length > 0) {
          for (let i = 0; i < this.resultadosPracticaHistoriaUniv.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaHistoriaUniv[i].puntos;
          }
        }
      });
  }

  obtener_resultados_lenguaje(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_lenguaje(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaLenguaje = response.data;

        if (this.resultadosPracticaLenguaje.length > 0) {
          for (let i = 0; i < this.resultadosPracticaLenguaje.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaLenguaje[i].puntos;
          }
        }
      });
  }

  obtener_resultados_literatura(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_literatura(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaLiteratura = response.data;

        if (this.resultadosPracticaLiteratura.length > 0) {
          for (let i = 0; i < this.resultadosPracticaLiteratura.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaLiteratura[i].puntos;
          }
        }
      });
  }

  obtener_resultados_quimica(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_quimica(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaQuimica = response.data;

        if (this.resultadosPracticaQuimica.length > 0) {
          for (let i = 0; i < this.resultadosPracticaQuimica.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaQuimica[i].puntos;
          }
        }
      });
  }

  obtener_resultados_razMatematico(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_raz_matematico(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaRazMatematico = response.data;

        if (this.resultadosPracticaRazMatematico.length > 0) {
          for (let i = 0; i < this.resultadosPracticaRazMatematico.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaRazMatematico[i].puntos;
          }
        }
      });
  }

  obtener_resultados_razVerbal(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_raz_verbal(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaRazVerbal = response.data;

        if (this.resultadosPracticaRazVerbal.length > 0) {
          for (let i = 0; i < this.resultadosPracticaRazVerbal.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaRazVerbal[i].puntos;
          }
        }
      });
  }

  obtener_resultados_trigonometria(id: any) {
    this.sumatoria = 0;
    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_trigonometria(id, this.token)
      .subscribe((response) => {
        this.resultadosPracticaTrigonometria = response.data;

        if (this.resultadosPracticaTrigonometria.length > 0) {
          for (let i = 0; i < this.resultadosPracticaTrigonometria.length; i++) {
            this.sumatoria = this.sumatoria + this.resultadosPracticaTrigonometria[i].puntos;
          }
        }
      });
  }

}
