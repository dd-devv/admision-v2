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

  [key: string]: any;

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

    // Definir el mapeo de materias y sus offsets
    const materiaConfig = [
      { nombre: 'Algebra', offset: 0 },
      { nombre: 'Anatomia', offset: 3 },
      { nombre: 'Aritmetica', offset: 6 },
      { nombre: 'Biologia', offset: 9 },
      { nombre: 'Economia', offset: 12 },
      { nombre: 'EdCivica', offset: 15 },
      { nombre: 'Fisica', offset: 18 },
      { nombre: 'Geografia', offset: 21 },
      { nombre: 'Geometria', offset: 23 },
      { nombre: 'HistoriaPeru', offset: 25 },
      { nombre: 'HistoriaUniv', offset: 28 },
      { nombre: 'Lenguaje', offset: 31 },
      { nombre: 'Literatura', offset: 34 },
      { nombre: 'Quimica', offset: 37 },
      { nombre: 'RazMatematico', offset: 40 },
      { nombre: 'RazVerbal', offset: 44 },
      { nombre: 'Trigonometria', offset: 48 }
    ];

    this._preguntaService.obtener_preguntas_prueba_gratis().subscribe(
      response => {
        this.preguntas = response.data;

        // Asignar preguntas a sus respectivas propiedades
        materiaConfig.forEach((materia, index) => {
          this[`preguntas${materia.nombre}`] = this.preguntas[index];
        });

        // Procesar las respuestas correctas para cada materia
        materiaConfig.forEach(materia => {
          const preguntas = this[`preguntas${materia.nombre}`];

          preguntas.forEach((pregunta: { [x: string]: any[]; }, preguntaIndex: number) => {
            const alternativas = ['a', 'b', 'c', 'd', 'e'];

            for (const alt of alternativas) {
              if (pregunta[`alt_${alt}`][1]) {
                this.correctas[preguntaIndex + materia.offset] = pregunta[`alt_${alt}`][0];
                break; // Salir del loop una vez encontrada la respuesta correcta
              }
            }
          });
        });

        this.iniciando = false;
        this.load_data = false;
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

