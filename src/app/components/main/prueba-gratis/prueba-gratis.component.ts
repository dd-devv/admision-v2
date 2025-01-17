import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { PreguntaService } from '../../../services/pregunta.service';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { UserService } from '../../../services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prueba-gratis',
  templateUrl: './prueba-gratis.component.html',
  styleUrls: ['./prueba-gratis.component.css']
})

export class PruebaGratisComponent implements OnInit {

  public load_data = true;
  public descargando = false;
  public iniciando = false;
  public view_button = false;
  public proceder = false;
  public calificado = false;
  public puntaje: any = 0;
  public nota: any = 0;
  public puntos: any = 0;
  public pregAcertadas: any = 0;
  public token: any;
  public id: any;

  public preguntas: Array<any> = [];
  public preguntasAlgebra: Array<any> = [];
  public preguntasAnatomia: Array<any> = [];
  public preguntasAritmetica: Array<any> = [];
  public preguntasBiologia: Array<any> = [];
  public preguntasEconomia: Array<any> = [];
  public preguntasEdCivica: Array<any> = [];
  public preguntasFisica: Array<any> = [];
  public preguntasGeografia: Array<any> = [];
  public preguntasGeometria: Array<any> = [];
  public preguntasHistoriaPeru: Array<any> = [];
  public preguntasHistoriaUniv: Array<any> = [];
  public preguntasLenguaje: Array<any> = [];
  public preguntasLiteratura: Array<any> = [];
  public preguntasQuimica: Array<any> = [];
  public preguntasRazMatematico: Array<any> = [];
  public preguntasRazVerbal: Array<any> = [];
  public preguntasTrigonometria: Array<any> = [];

  public puntosCiencias: Array<Number> = [3, 3, 3, 1, 1, 1, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 1, 1];

  public puntosLetras: Array<Number> = [2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,
    2, 2, 2, 3, 3, 3, 3, 1, 1];

  public puntosBiomedicas: Array<Number> = [2, 2, 2, 3, 3, 3, 1, 1, 1, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3,
    2, 2, 2, 2, 3, 3, 3, 3, 1, 1];

  public puntosCalificar: Array<Number> = [];

  public marcados: Array<any> = [];
  public correctas: Array<any> = [];
  public acertadas: Array<any> = [];
  public resultado: any = {};
  public url: any;

  public area = '';

  public tiempo: Date = new Date(0);
  public temporizador: any;

  constructor(
    private _preguntaService: PreguntaService,
    private _userService: UserService,
    private _router: Router,
    private _title: Title
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
  }

  ngOnInit(): void {
    this._title.setTitle('Prueba gratis');
  }

  select_area() {
    this.view_button = true;
    if (this.area == 'Ciencias') {
      this.puntosCalificar = this.puntosCiencias;

    } else if (this.area == 'Letras') {
      this.puntosCalificar = this.puntosLetras;

    } if (this.area == 'Biomedicas') {
      this.puntosCalificar = this.puntosBiomedicas;

    }
  }

  init_data() {
    this.marcados = [];
    this.proceder = false;
    this.iniciando = true;
    this._preguntaService.obtener_preguntas_prueba_gratis().subscribe(
      response => {
        this.preguntas = response.data;
        this.preguntasAlgebra = this.preguntas[0];
        this.preguntasAnatomia = this.preguntas[1];
        this.preguntasAritmetica = this.preguntas[2];
        this.preguntasBiologia = this.preguntas[3];
        this.preguntasEconomia = this.preguntas[4];
        this.preguntasEdCivica = this.preguntas[5];
        this.preguntasFisica = this.preguntas[6];
        this.preguntasGeografia = this.preguntas[7];
        this.preguntasGeometria = this.preguntas[8];
        this.preguntasHistoriaPeru = this.preguntas[9];
        this.preguntasHistoriaUniv = this.preguntas[10];
        this.preguntasLenguaje = this.preguntas[11];
        this.preguntasLiteratura = this.preguntas[12];
        this.preguntasQuimica = this.preguntas[13];
        this.preguntasRazMatematico = this.preguntas[14];
        this.preguntasRazVerbal = this.preguntas[15];
        this.preguntasTrigonometria = this.preguntas[16];

        //Álgebra
        for (let i = 0; i < this.preguntasAlgebra.length; i++) {
          if (this.preguntasAlgebra[i].alt_a[1]) {
            this.correctas[i] = this.preguntasAlgebra[i].alt_a[0];

          } else if (this.preguntasAlgebra[i].alt_b[1]) {
            this.correctas[i] = this.preguntasAlgebra[i].alt_b[0];

          } else if (this.preguntasAlgebra[i].alt_c[1]) {
            this.correctas[i] = this.preguntasAlgebra[i].alt_c[0];

          } else if (this.preguntasAlgebra[i].alt_d[1]) {
            this.correctas[i] = this.preguntasAlgebra[i].alt_d[0];

          } else if (this.preguntasAlgebra[i].alt_e[1]) {
            this.correctas[i] = this.preguntasAlgebra[i].alt_e[0];
          }
        }

        //Anatomía
        for (let i = 0; i < this.preguntasAnatomia.length; i++) {
          if (this.preguntasAnatomia[i].alt_a[1]) {
            this.correctas[i + 3] = this.preguntasAnatomia[i].alt_a[0];

          } else if (this.preguntasAnatomia[i].alt_b[1]) {
            this.correctas[i + 3] = this.preguntasAnatomia[i].alt_b[0];

          } else if (this.preguntasAnatomia[i].alt_c[1]) {
            this.correctas[i + 3] = this.preguntasAnatomia[i].alt_c[0];

          } else if (this.preguntasAnatomia[i].alt_d[1]) {
            this.correctas[i + 3] = this.preguntasAnatomia[i].alt_d[0];

          } else if (this.preguntasAnatomia[i].alt_e[1]) {
            this.correctas[i + 3] = this.preguntasAnatomia[i].alt_e[0];
          }
        }

        //Aritmética
        for (let i = 0; i < this.preguntasAritmetica.length; i++) {
          if (this.preguntasAritmetica[i].alt_a[1]) {
            this.correctas[i + 6] = this.preguntasAritmetica[i].alt_a[0];

          } else if (this.preguntasAritmetica[i].alt_b[1]) {
            this.correctas[i + 6] = this.preguntasAritmetica[i].alt_b[0];

          } else if (this.preguntasAritmetica[i].alt_c[1]) {
            this.correctas[i + 6] = this.preguntasAritmetica[i].alt_c[0];

          } else if (this.preguntasAritmetica[i].alt_d[1]) {
            this.correctas[i + 6] = this.preguntasAritmetica[i].alt_d[0];

          } else if (this.preguntasAritmetica[i].alt_e[1]) {
            this.correctas[i + 6] = this.preguntasAritmetica[i].alt_e[0];
          }
        }

        //Biología
        for (let i = 0; i < this.preguntasBiologia.length; i++) {
          if (this.preguntasBiologia[i].alt_a[1]) {
            this.correctas[i + 9] = this.preguntasBiologia[i].alt_a[0];

          } else if (this.preguntasBiologia[i].alt_b[1]) {
            this.correctas[i + 9] = this.preguntasBiologia[i].alt_b[0];

          } else if (this.preguntasBiologia[i].alt_c[1]) {
            this.correctas[i + 9] = this.preguntasBiologia[i].alt_c[0];

          } else if (this.preguntasBiologia[i].alt_d[1]) {
            this.correctas[i + 9] = this.preguntasBiologia[i].alt_d[0];

          } else if (this.preguntasBiologia[i].alt_e[1]) {
            this.correctas[i + 9] = this.preguntasBiologia[i].alt_e[0];
          }
        }

        //Economía
        for (let i = 0; i < this.preguntasEconomia.length; i++) {
          if (this.preguntasEconomia[i].alt_a[1]) {
            this.correctas[i + 12] = this.preguntasEconomia[i].alt_a[0];

          } else if (this.preguntasEconomia[i].alt_b[1]) {
            this.correctas[i + 12] = this.preguntasEconomia[i].alt_b[0];

          } else if (this.preguntasEconomia[i].alt_c[1]) {
            this.correctas[i + 12] = this.preguntasEconomia[i].alt_c[0];

          } else if (this.preguntasEconomia[i].alt_d[1]) {
            this.correctas[i + 12] = this.preguntasEconomia[i].alt_d[0];

          } else if (this.preguntasEconomia[i].alt_e[1]) {
            this.correctas[i + 12] = this.preguntasEconomia[i].alt_e[0];
          }
        }

        //Educación Cívica
        for (let i = 0; i < this.preguntasEdCivica.length; i++) {
          if (this.preguntasEdCivica[i].alt_a[1]) {
            this.correctas[i + 15] = this.preguntasEdCivica[i].alt_a[0];

          } else if (this.preguntasEdCivica[i].alt_b[1]) {
            this.correctas[i + 15] = this.preguntasEdCivica[i].alt_b[0];

          } else if (this.preguntasEdCivica[i].alt_c[1]) {
            this.correctas[i + 15] = this.preguntasEdCivica[i].alt_c[0];

          } else if (this.preguntasEdCivica[i].alt_d[1]) {
            this.correctas[i + 15] = this.preguntasEdCivica[i].alt_d[0];

          } else if (this.preguntasEdCivica[i].alt_e[1]) {
            this.correctas[i + 15] = this.preguntasEdCivica[i].alt_e[0];
          }
        }

        //Física
        for (let i = 0; i < this.preguntasFisica.length; i++) {
          if (this.preguntasFisica[i].alt_a[1]) {
            this.correctas[i + 18] = this.preguntasFisica[i].alt_a[0];

          } else if (this.preguntasFisica[i].alt_b[1]) {
            this.correctas[i + 18] = this.preguntasFisica[i].alt_b[0];

          } else if (this.preguntasFisica[i].alt_c[1]) {
            this.correctas[i + 18] = this.preguntasFisica[i].alt_c[0];

          } else if (this.preguntasFisica[i].alt_d[1]) {
            this.correctas[i + 18] = this.preguntasFisica[i].alt_d[0];

          } else if (this.preguntasFisica[i].alt_e[1]) {
            this.correctas[i + 18] = this.preguntasFisica[i].alt_e[0];
          }
        }

        //Geografía
        for (let i = 0; i < this.preguntasGeografia.length; i++) {
          if (this.preguntasGeografia[i].alt_a[1]) {
            this.correctas[i + 21] = this.preguntasGeografia[i].alt_a[0];

          } else if (this.preguntasGeografia[i].alt_b[1]) {
            this.correctas[i + 21] = this.preguntasGeografia[i].alt_b[0];

          } else if (this.preguntasGeografia[i].alt_c[1]) {
            this.correctas[i + 21] = this.preguntasGeografia[i].alt_c[0];

          } else if (this.preguntasGeografia[i].alt_d[1]) {
            this.correctas[i + 21] = this.preguntasGeografia[i].alt_d[0];

          } else if (this.preguntasGeografia[i].alt_e[1]) {
            this.correctas[i + 21] = this.preguntasGeografia[i].alt_e[0];
          }
        }

        //Geometría
        for (let i = 0; i < this.preguntasGeometria.length; i++) {
          if (this.preguntasGeometria[i].alt_a[1]) {
            this.correctas[i + 23] = this.preguntasGeometria[i].alt_a[0];

          } else if (this.preguntasGeometria[i].alt_b[1]) {
            this.correctas[i + 23] = this.preguntasGeometria[i].alt_b[0];

          } else if (this.preguntasGeometria[i].alt_c[1]) {
            this.correctas[i + 23] = this.preguntasGeometria[i].alt_c[0];

          } else if (this.preguntasGeometria[i].alt_d[1]) {
            this.correctas[i + 23] = this.preguntasGeometria[i].alt_d[0];

          } else if (this.preguntasGeometria[i].alt_e[1]) {
            this.correctas[i + 23] = this.preguntasGeometria[i].alt_e[0];
          }
        }

        //Historia del perú
        for (let i = 0; i < this.preguntasHistoriaPeru.length; i++) {
          if (this.preguntasHistoriaPeru[i].alt_a[1]) {
            this.correctas[i + 25] = this.preguntasHistoriaPeru[i].alt_a[0];

          } else if (this.preguntasHistoriaPeru[i].alt_b[1]) {
            this.correctas[i + 25] = this.preguntasHistoriaPeru[i].alt_b[0];

          } else if (this.preguntasHistoriaPeru[i].alt_c[1]) {
            this.correctas[i + 25] = this.preguntasHistoriaPeru[i].alt_c[0];

          } else if (this.preguntasHistoriaPeru[i].alt_d[1]) {
            this.correctas[i + 25] = this.preguntasHistoriaPeru[i].alt_d[0];

          } else if (this.preguntasHistoriaPeru[i].alt_e[1]) {
            this.correctas[i + 25] = this.preguntasHistoriaPeru[i].alt_e[0];
          }
        }

        //Historia Universal
        for (let i = 0; i < this.preguntasHistoriaUniv.length; i++) {
          if (this.preguntasHistoriaUniv[i].alt_a[1]) {
            this.correctas[i + 28] = this.preguntasHistoriaUniv[i].alt_a[0];

          } else if (this.preguntasHistoriaUniv[i].alt_b[1]) {
            this.correctas[i + 28] = this.preguntasHistoriaUniv[i].alt_b[0];

          } else if (this.preguntasHistoriaUniv[i].alt_c[1]) {
            this.correctas[i + 28] = this.preguntasHistoriaUniv[i].alt_c[0];

          } else if (this.preguntasHistoriaUniv[i].alt_d[1]) {
            this.correctas[i + 28] = this.preguntasHistoriaUniv[i].alt_d[0];

          } else if (this.preguntasHistoriaUniv[i].alt_e[1]) {
            this.correctas[i + 28] = this.preguntasHistoriaUniv[i].alt_e[0];
          }
        }

        //Lenguaje
        for (let i = 0; i < this.preguntasLenguaje.length; i++) {
          if (this.preguntasLenguaje[i].alt_a[1]) {
            this.correctas[i + 31] = this.preguntasLenguaje[i].alt_a[0];

          } else if (this.preguntasLenguaje[i].alt_b[1]) {
            this.correctas[i + 31] = this.preguntasLenguaje[i].alt_b[0];

          } else if (this.preguntasLenguaje[i].alt_c[1]) {
            this.correctas[i + 31] = this.preguntasLenguaje[i].alt_c[0];

          } else if (this.preguntasLenguaje[i].alt_d[1]) {
            this.correctas[i + 31] = this.preguntasLenguaje[i].alt_d[0];

          } else if (this.preguntasLenguaje[i].alt_e[1]) {
            this.correctas[i + 31] = this.preguntasLenguaje[i].alt_e[0];
          }
        }

        //Literatura
        for (let i = 0; i < this.preguntasLiteratura.length; i++) {
          if (this.preguntasLiteratura[i].alt_a[1]) {
            this.correctas[i + 34] = this.preguntasLiteratura[i].alt_a[0];

          } else if (this.preguntasLiteratura[i].alt_b[1]) {
            this.correctas[i + 34] = this.preguntasLiteratura[i].alt_b[0];

          } else if (this.preguntasLiteratura[i].alt_c[1]) {
            this.correctas[i + 34] = this.preguntasLiteratura[i].alt_c[0];

          } else if (this.preguntasLiteratura[i].alt_d[1]) {
            this.correctas[i + 34] = this.preguntasLiteratura[i].alt_d[0];

          } else if (this.preguntasLiteratura[i].alt_e[1]) {
            this.correctas[i + 34] = this.preguntasLiteratura[i].alt_e[0];
          }
        }

        //Química
        for (let i = 0; i < this.preguntasQuimica.length; i++) {
          if (this.preguntasQuimica[i].alt_a[1]) {
            this.correctas[i + 37] = this.preguntasQuimica[i].alt_a[0];

          } else if (this.preguntasQuimica[i].alt_b[1]) {
            this.correctas[i + 37] = this.preguntasQuimica[i].alt_b[0];

          } else if (this.preguntasQuimica[i].alt_c[1]) {
            this.correctas[i + 37] = this.preguntasQuimica[i].alt_c[0];

          } else if (this.preguntasQuimica[i].alt_d[1]) {
            this.correctas[i + 37] = this.preguntasQuimica[i].alt_d[0];

          } else if (this.preguntasQuimica[i].alt_e[1]) {
            this.correctas[i + 37] = this.preguntasQuimica[i].alt_e[0];
          }
        }

        //Razonamiento Matemático
        for (let i = 0; i < this.preguntasRazMatematico.length; i++) {
          if (this.preguntasRazMatematico[i].alt_a[1]) {
            this.correctas[i + 40] = this.preguntasRazMatematico[i].alt_a[0];

          } else if (this.preguntasRazMatematico[i].alt_b[1]) {
            this.correctas[i + 40] = this.preguntasRazMatematico[i].alt_b[0];

          } else if (this.preguntasRazMatematico[i].alt_c[1]) {
            this.correctas[i + 40] = this.preguntasRazMatematico[i].alt_c[0];

          } else if (this.preguntasRazMatematico[i].alt_d[1]) {
            this.correctas[i + 40] = this.preguntasRazMatematico[i].alt_d[0];

          } else if (this.preguntasRazMatematico[i].alt_e[1]) {
            this.correctas[i + 40] = this.preguntasRazMatematico[i].alt_e[0];
          }
        }

        //Razonamiento Verbal
        for (let i = 0; i < this.preguntasRazVerbal.length; i++) {
          if (this.preguntasRazVerbal[i].alt_a[1]) {
            this.correctas[i + 44] = this.preguntasRazVerbal[i].alt_a[0];

          } else if (this.preguntasRazVerbal[i].alt_b[1]) {
            this.correctas[i + 44] = this.preguntasRazVerbal[i].alt_b[0];

          } else if (this.preguntasRazVerbal[i].alt_c[1]) {
            this.correctas[i + 44] = this.preguntasRazVerbal[i].alt_c[0];

          } else if (this.preguntasRazVerbal[i].alt_d[1]) {
            this.correctas[i + 44] = this.preguntasRazVerbal[i].alt_d[0];

          } else if (this.preguntasRazVerbal[i].alt_e[1]) {
            this.correctas[i + 44] = this.preguntasRazVerbal[i].alt_e[0];
          }
        }

        //Trigonometría
        for (let i = 0; i < this.preguntasTrigonometria.length; i++) {
          if (this.preguntasTrigonometria[i].alt_a[1]) {
            this.correctas[i + 48] = this.preguntasTrigonometria[i].alt_a[0];

          } else if (this.preguntasTrigonometria[i].alt_b[1]) {
            this.correctas[i + 48] = this.preguntasTrigonometria[i].alt_b[0];

          } else if (this.preguntasTrigonometria[i].alt_c[1]) {
            this.correctas[i + 48] = this.preguntasTrigonometria[i].alt_c[0];

          } else if (this.preguntasTrigonometria[i].alt_d[1]) {
            this.correctas[i + 48] = this.preguntasTrigonometria[i].alt_d[0];

          } else if (this.preguntasTrigonometria[i].alt_e[1]) {
            this.correctas[i + 48] = this.preguntasTrigonometria[i].alt_e[0];
          }
        }

        this.load_data = false;
        this.iniciando = false;
      }
    );
  }

  //Inicia temporizador

  iniciar(): void {
    this.init_data();
    this.detener();
    this.tiempo = new Date(5400000);
    this.temporizador = setInterval(() => {
      this.tiempo.setSeconds(this.tiempo.getSeconds() - 1);

      if (this.tiempo.getTime() == 0) {
        this.proceder = true;
        this.calificar();
      }

    }, 1000);
  }

  detener(): void {
    clearInterval(this.temporizador);
  }

  resetear(): void {
    this.detener();
    this.tiempo = new Date(0);
  }

  getTiempoFormateado(tiempo: Date): string {
    const horas = tiempo.getUTCHours().toString().padStart(1, '0');
    const minutos = tiempo.getUTCMinutes().toString().padStart(1, '0');
    const segundos = tiempo.getUTCSeconds().toString().padStart(1, '0');
    return `${horas}h : ${minutos}m : ${segundos}s`;
  }

  //Fin de temporizador

  //Modales
  ver_modal_resultado() {
    const modal = document.querySelector('#staticBackdrop');
    modal?.classList.add('show');
    modal?.setAttribute('aria-modal', 'true');
    modal?.setAttribute('style', 'display: block;');
    document.body.classList.add('modal-open');
  }
  cerrrar_modal_resultado() {
    const modal = document.querySelector('#staticBackdrop');
    modal?.classList.remove('show');
    modal?.setAttribute('aria-modal', 'false');
    modal?.setAttribute('style', 'display: none;');
    document.body.classList.remove('modal-open');
    this.ver_modal_solucionario();
  }

  ver_modal_solucionario() {
    const modal = document.querySelector('#staticBackdrop1');
    modal?.classList.add('show');
    modal?.setAttribute('aria-modal', 'true');
    modal?.setAttribute('style', 'display: block;');
    document.body.classList.add('modal-open');
  }

  cerrrar_modal_solucionario() {
    const modal = document.querySelector('#staticBackdrop1');
    modal?.classList.remove('show');
    modal?.setAttribute('aria-modal', 'false');
    modal?.setAttribute('style', 'display: none;');
    document.body.classList.remove('modal-open');
  }

  agregarMarcado(i: any, value: String) {
    this.marcados[i] = value;
    this.verificarMarcados();
  }

  verificarMarcados() {
    if (this.marcados.length !== this.correctas.length) {
      this.proceder = false;
    } else {
      this.proceder = true;
    }
  }

  cambiarProceder() {
    this.proceder = true;
  }

  calificar() {
    this.detener();

    this.calificado = false;
    this.pregAcertadas = 0;
    if (this.proceder) {
      for (let i = 0; i < this.correctas.length; i++) {
        if (this.correctas[i] == this.marcados[i]) {
          this.acertadas[i] = this.marcados[i];
        }
      }
      this.calificado = false;
    }

    for (let i = 0; i < this.acertadas.length; i++) {
      if (this.acertadas[i]) {
        this.pregAcertadas++;
        this.puntos = this.puntos + this.puntosCalificar[i];
      }
    }

    this.puntaje = ((this.puntos * 500) / 120).toFixed(4);

    this.nota = ((this.puntos * 20) / 120).toFixed(2);

    this.ver_modal_resultado();

  }

  redirigir() {
    this._router.navigate(['/registro']);
  }

  public descargarPDF(): void {
    this.descargando = true;

    const element = document.getElementById('solucionario');

    html2canvas(element!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      let imgWidth = 210;
      let pageHeight = 297;

      const height = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = height;
      let pdf = new jsPDF('p', 'mm');
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, height);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - height;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, height);
        heightLeft -= pageHeight;
      }

      this.descargando = false;

      pdf.save('solucionario-examen.pdf');
      this.cerrrar_modal_solucionario();

      location.reload();
    });
  }

}

