import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  public pagos: Array<any> = [];
  public cuentas: Array<any> = [];
  public plan: any;
  public token: any;
  public id: any;
  public pago_basico = 10;
  public pago_premium = 20;
  public codigo_referido = '';
  public verificado: boolean = false;

  public load_data: boolean = true;
  // public activePagos: boolean = false;
  public activePagos: boolean = true;
  public viewButton: boolean = false;

  constructor(
    private _userService: UserService,
    private _title: Title,
    private _toastrService: ToastrService
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
    this.plan = localStorage.getItem('plan');

    this.init_data();
  }

  ngOnInit(): void {
    this._title.setTitle('Perfil | Mis pagos');
  }

  init_data() {
    // this._userService
    //   .obtener_pagos_cliente(this.id, this.token)
    //   .subscribe((response) => {
    //     this.pagos = response.data;
    //     this.load_data = false;

    //     if (this.pagos) {
    //       for (let i = 0; i < this.pagos.length; i++) {

    //         if (this.pagos[i].estado == 'Confirmado') {
    //           this.activePagos = true;
    //           this.viewButton = false;
    //           break;
    //         } else if (this.pagos[i].estado == 'Vencido') {
    //           this.activePagos = false;
    //           this.viewButton = true;
    //         } else if (this.pagos[i].estado == 'Reservado') {
    //           this.activePagos = false;
    //           this.viewButton = false;
    //           break;
    //         }
    //       }
    //     } else {
    //       this.activePagos = false;
    //       this.viewButton = true;
    //     }
    //   });

    this._userService.obtener_cuentas(this.token).subscribe(
      response => {
        this.cuentas = response.data;
        this.load_data = false;
      }
    );
  }

  verificar_codigo_referido() {
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

          this.init_data();
          this.viewButton = false;
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

          this.init_data();
          this.viewButton = false;
        }
      });
  }
}
