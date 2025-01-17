import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  public pagos: Array<any> = [];
  public filtro = '';
  public err_msg = false;
  public token;
  public load_data = true;
  public load_btn = true;
  public show_alert_void = false;
  p: number = 1;

  constructor(
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _title: Title,
    private _router: Router,
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Pagos');
    this.init_data();
  }

  init_data() {
    this._userService.obtener_pagos_admin(this.token).subscribe(
      response => {
        this.pagos = response.data;
        this.load_data = false;
      }
    );
  }

  cambiar_estado_confirmado(id: any) {
    this._userService.actualizar_pago_confirmado(id, this.token).subscribe(
      response => {
        if (response.data == undefined) {
          this._toastrService.error(response.message, 'ERROR');
        } else {

          this._toastrService.success('Se confirmó con éxito', 'CONFIRMADO!');
          this._userService.enviar_correo_confirmacion_admin(id, this.token).subscribe(
            response => {
              if (response.data) {
                this._toastrService.success('Se envió correo de confirmación', 'ENVIADO!');
              } else {
                this._toastrService.error('Error al enviar correo', 'ERROR');
              }
            }
           );

          this.init_data();
        }
      }
    );
  }

  filtrar_id(filtro: any) {

    if (filtro) {
      this._userService.obtener_pago_admin(filtro, this.token).subscribe(
        response => {
          if (response.data != undefined) {
            this.err_msg = false;
            this._router.navigate(['/admin/pagos/' + filtro]);
          } else {
            this.err_msg = true;
          }
        }
      );
    }
    if (filtro == '' || filtro == undefined || filtro == null) {
      this.init_data();
    }
  }

}
