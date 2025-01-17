import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../services/global';
import { PreguntaService } from '../../../../services/pregunta.service';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { UserService } from '../../../../services/user.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.css']
})

export class GeometriaComponent implements OnInit {

  public load_data = true;
  public iniciando = false;
  public proceder = false;
  public calificado = false;
  public puntaje: any = 0;
  public token: any;
  public id: any;
  public preguntas: Array<any> = [];
  public marcados: Array<any> = [];
  public correctas: Array<any> = [];
  public acertadas: Array<any> = [];
  public resultado: any = {};
  public url: any;

  public tiempo: Date = new Date(0);
  public temporizador: any;

  public pagos: Array<any> = [];
  public cuentas: Array<any> = [];
  public load_cuentas = true;
  public pago_basico = 10;
  public pago_premium = 20;
  public codigo_referido = '';
  public verificado: boolean = false;
  public viewButton: boolean = false;
  public plan: any;
  public activePagos: boolean = true;

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

    this.obtener_pago();

    this._userService.obtener_cuentas(this.token).subscribe(
      response => {
        this.cuentas = response.data;
        this.load_cuentas = false;
      }
    );
  }

  ngOnInit(): void {
    this._title.setTitle('Prácticas | Geometría');
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

  init_data() {
    this.marcados = [];
    this.proceder = false;
    this.iniciando = true;
    this._preguntaService.obtener_preguntas_practica_geometria(this.token).subscribe(
      response => {
        this.preguntas = response.data;
        this.load_data = false;

        for (let i = 0; i < this.preguntas.length; i++) {
          if (this.preguntas[i].alt_a[1]) {
            this.correctas[i] = this.preguntas[i].alt_a[0];

          } else if (this.preguntas[i].alt_b[1]) {
            this.correctas[i] = this.preguntas[i].alt_b[0];

          } else if (this.preguntas[i].alt_c[1]) {
            this.correctas[i] = this.preguntas[i].alt_c[0];

          } else if (this.preguntas[i].alt_d[1]) {
            this.correctas[i] = this.preguntas[i].alt_d[0];

          } else if (this.preguntas[i].alt_e[1]) {
            this.correctas[i] = this.preguntas[i].alt_e[0];
          }
        }

        this.iniciando = false;
      }
    );
  }

  //Inicia temporizador

  iniciar(): void {
    this.init_data();
    this.detener();
    this.tiempo = new Date(0);
    this.temporizador = setInterval(() => {
      this.tiempo.setSeconds(this.tiempo.getSeconds() + 1);
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
    this.puntaje = 0;
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
        this.puntaje++;
      }
    }

    this.resultado.user = this.id;
    this.resultado.puntos = this.puntaje;

    this._userService.registro_resultado_practicas_geometria(this.resultado, this.token).subscribe(
      response => {
      }
    );
  }

  redirigir() {
    this._router.navigate(['/usuario/practicas']);
  }

  public descargarPDF(): void {
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

      pdf.save('solucionario-practica-geometria.pdf');

      this._router.navigate(['/usuario/practicas']);
    });
  }

}





