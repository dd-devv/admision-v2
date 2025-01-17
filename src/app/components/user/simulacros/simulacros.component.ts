import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { PreguntaService } from '../../../services/pregunta.service';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { UserService } from '../../../services/user.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simulacros',
  templateUrl: './simulacros.component.html',
  styleUrls: ['./simulacros.component.css']
})

export class SimulacrosComponent implements OnInit {

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

  [key: string]: any;

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
  public user_lc: any = {};
  public url: any;

  public area = '';

  public tiempo: Date = new Date(0);
  public temporizador: any;

  public pagos: Array<any> = [];
  public cuentas: Array<any> = [];
  public load_cuentas = true;
  public pago_basico = 10;
  public pago_premium = 20;
  public codigo_referido = '';
  public verificado: boolean = false;
  public plan: any;
  public activePagos: boolean = true;
  public viewButton: boolean = false;

  constructor(
    private _preguntaService: PreguntaService,
    private _userService: UserService,
    private _router: Router,
    private _title: Title,
    private _toastrService: ToastrService
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
    this.plan = localStorage.getItem('plan');

    this.user_lc = JSON.parse(localStorage.getItem('user_data')!);

    this.area = this.user_lc.area;

    this.select_area();

    this.obtener_pago();

    this._userService.obtener_cuentas(this.token).subscribe(
      response => {
        this.cuentas = response.data;
        this.load_cuentas = false;
      }
    );
  }

  ngOnInit(): void {
    this._title.setTitle('Similacro de admisión');
  }

  obtener_pago() {
    //Obtener pagos
    // this._userService.obtener_pagos_cliente(this.id, this.token).subscribe(
    //   response => {
    //     this.pagos = response.data;

    //     if (this.pagos) {
    //       for (let i = 0; i < this.pagos.length; i++) {

    //         if (this.pagos[i].estado == 'Confirmado') {
    //           this.activePagos = true;
    //           this.viewButton = false;
    //           break;
    //         } else if (this.pagos[i].estado == 'Vencido') {
    //           this.activePagos = false;
    //           this.viewButton = false;
    //         } else if (this.pagos[i].estado == 'Reservado') {
    //           this.activePagos = false;
    //           this.viewButton = true;
    //           break;
    //         }
    //       }
    //     } else {
    //       this.activePagos = false;
    //       this.viewButton = false;
    //     }
    //   }
    // );
  }

  cambiar_plan() {
    localStorage.removeItem('plan');
    location.reload();
    this.obtener_pago();
  }

  seleccionar_plan(plan: string) {
    localStorage.setItem('plan', plan);
  }

  select_area() {
    if (this.area == 'Ciencias') {
      this.puntosCalificar = this.puntosCiencias;

    } else if (this.area == 'Letras') {
      this.puntosCalificar = this.puntosLetras;

    } if (this.area == 'Biomédicas') {
      this.puntosCalificar = this.puntosBiomedicas;

    }
  }

  init_data() {
    // Estado inicial
    this.marcados = [];
    this.proceder = false;
    this.iniciando = true;

    // Configuración de materias con sus offsets
    const materiaConfig = [
      { key: 'Algebra', offset: 0 },
      { key: 'Anatomia', offset: 3 },
      { key: 'Aritmetica', offset: 6 },
      { key: 'Biologia', offset: 9 },
      { key: 'Economia', offset: 12 },
      { key: 'EdCivica', offset: 15 },
      { key: 'Fisica', offset: 18 },
      { key: 'Geografia', offset: 21 },
      { key: 'Geometria', offset: 23 },
      { key: 'HistoriaPeru', offset: 25 },
      { key: 'HistoriaUniv', offset: 28 },
      { key: 'Lenguaje', offset: 31 },
      { key: 'Literatura', offset: 34 },
      { key: 'Quimica', offset: 37 },
      { key: 'RazMatematico', offset: 40 },
      { key: 'RazVerbal', offset: 44 },
      { key: 'Trigonometria', offset: 48 }
    ];

    // Función auxiliar para procesar las alternativas correctas
    const processarRespuestasCorrectas = (preguntas: any[], offset: number) => {
      preguntas.forEach((pregunta, index) => {
        ['a', 'b', 'c', 'd', 'e'].some(letra => {
          if (pregunta[`alt_${letra}`][1]) {
            this.correctas[index + offset] = pregunta[`alt_${letra}`][0];
            return true; // Rompe el loop una vez encontrada la respuesta correcta
          }
          return false;
        });
      });
    };

    // Solicitar y procesar datos
    this._preguntaService.obtener_preguntas_examen(this.token).subscribe({
      next: (response) => {
        try {
          // Asignar preguntas al objeto principal
          this.preguntas = response.data;

          // Asignar preguntas por materia y procesar respuestas correctas
          materiaConfig.forEach((materia, index) => {
            // Asignar preguntas a la propiedad correspondiente
            this[`preguntas${materia.key}`] = this.preguntas[index];

            // Procesar las respuestas correctas
            processarRespuestasCorrectas(this[`preguntas${materia.key}`], materia.offset);
          });

        } catch (error) {
          console.error('Error procesando datos del examen:', error);
          // Aquí podrías implementar un manejo de errores más específico
        } finally {
          // Actualizar estados finales
          this.load_data = false;
          this.iniciando = false;
        }
      },
      error: (error) => {
        console.error('Error obteniendo preguntas del examen:', error);
        this.load_data = false;
        this.iniciando = false;
        // Aquí podrías implementar un manejo de errores más específico
      }
    });
  }

  verificar_codigo_referido(){
    if (this.codigo_referido.length == 6) {
      this._userService
    .verificar_codigo_referido(this.codigo_referido, this.token)
    .subscribe((response) => {
      if (response.data) {
        this._toastrService.success(
          'Se apicó el descuento',
          'DESCONTADO!'
        );
        this.verificado = true;

        this.pago_basico = this.pago_basico - (this.pago_basico * 0.1);
        this.pago_premium = this.pago_premium - (this.pago_premium * 0.1);

      } else {
        this._toastrService.error('Error al verificar código, vuelve a intentarlo', 'ERROR!');
      }
    });
    } else {
      this._toastrService.error('Longitud menor, debe ser de 6 dígitos', 'ERROR!');
    }
  }

  registrar_pago_basico() {
    let data = {
      user: this.id,
      subtotal: this.pago_basico,
      plan: 'Basico',
      transaccion: 111,
    };

    this._userService
      .registro_reservacion_cliente(data, this.token)
      .subscribe((response) => {
        if (response.pago == undefined) {
          this._toastrService.error(response.message, 'ERROR');
        } else {
          this._toastrService.success(
            'Se confirmó su reservación',
            'CONFIRMADO!'
          );

          this._userService
            .enviar_correo_reservacion_cliente(response.pago._id, this.token)
            .subscribe((response) => {
              if (response.data) {
                this._toastrService.success(
                  'Se envió correo de confirmación',
                  'ENVIADO!'
                );
              } else {
                this._toastrService.error('Error al enviar correo', 'ERROR');
              }
            });

          this._userService
            .registrar_codigo_referido(this.id, this.token)
            .subscribe((response) => {
              if (response.data) {
                this._toastrService.success(
                  'Se creó su código de referido',
                  'CREADO!'
                );
              } else {
                this._toastrService.error('Error al crear código', 'ERROR');
              }
            });

          this._router.navigate(['/usuario/perfil/pagos']);

          this.viewButton = true;
        }
      });
  }

  registrar_pago_premium() {
    let data = {
      user: this.id,
      subtotal: this.pago_premium,
      plan: 'Premium',
      transaccion: 111,
    };

    this._userService
      .registro_reservacion_cliente(data, this.token)
      .subscribe((response) => {
        if (response.pago == undefined) {
          this._toastrService.error(response.message, 'ERROR');
        } else {
          this._toastrService.success(
            'Se confirmó su reservación',
            'CONFIRMADO!'
          );

          this._userService
            .enviar_correo_reservacion_cliente(response.pago._id, this.token)
            .subscribe((response) => {
              if (response.data) {
                this._toastrService.success(
                  'Se envió correo de confirmación',
                  'ENVIADO!'
                );
              } else {
                this._toastrService.error('Error al enviar correo', 'ERROR');
              }
            });

          this._userService
            .registrar_codigo_referido(this.id, this.token)
            .subscribe((response) => {
              if (response.data) {
                this._toastrService.success(
                  'Se creó su código de referido',
                  'CREADO!'
                );
              } else {
                this._toastrService.error('Error al crear código', 'ERROR');
              }
            });

            this._router.navigate(['/usuario/perfil/pagos']);
        }
      });
  }

  //Inicia temporizador

  iniciar(): void {
    this.init_data();
    this.detener();
    this.view_button = true;
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

    let data = {
      user: this.id,
      puntos: this.puntaje,
      acertadas: this.pregAcertadas,
      nota: this.nota
    };

    this._userService.registro_resultado_examen(data, this.token).subscribe(
      response => {
      }
    );

  }

  redirigir() {
    this._router.navigate(['/usuario/simulacros']);
    location.reload();
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


