import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public token: any;
  public id: any;
  public user: any;
  public user_lc: any;
  public url: any;
  public reviews: Array<any> = [];
  public reviewsDestacados: Array<any> = [];
  screenWidth: number = 0;
  screenHeight: number = 0;

  public imagen_fondo: String = '';
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  constructor(
    private _title: Title,
    private _userService: UserService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {

    this.url = GLOBAL.url;
    this.user_lc = undefined;

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
    this.plan = localStorage.getItem('plan');

    if (this.token) {
      //Obtener usuario
      this._userService.obtener_user(this.id, this.token).subscribe(
        response => {
          this.user = response.data;
          localStorage.setItem('user_data', JSON.stringify(this.user));

          if (localStorage.getItem('user_data')) {
            this.user_lc = JSON.parse(localStorage.getItem('user_data')!);

            if (this.user_lc.role == 'ADMIN') {
              this._router.navigate(['/admin']);

            } else if (this.user_lc.role == 'USER') {
              this._router.navigate(['/usuario']);
            }
          } else {
            this.user_lc = undefined;
          }
        }
      );
    }

    if (this.screenWidth < this.screenHeight) {
      this.imagen_fondo = '../../../../assets/img/fondo-comentario.jpg';
    } else {
      this.imagen_fondo = '../../../../assets/img/fondo-coment.png';
    }

    this.init_data();
    this.obtener_pago();

    this._userService.obtener_cuentas(this.token).subscribe(
      response => {
        this.cuentas = response.data;
        this.load_cuentas = false;
      }
    );
  }

  init_data() {
    this._userService.obtener_reviews().subscribe(
      response => {
        this.reviews = response.data;

        if (this.reviews) {
          for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].destacado) {
              this.reviewsDestacados.push(this.reviews[i]);
            }
          }
        }
      }
    );
  }

  obtener_pago() {
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

  ngOnInit(): void {
    this._title.setTitle('Inicio');
  }

}
