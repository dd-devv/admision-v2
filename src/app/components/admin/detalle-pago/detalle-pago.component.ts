import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-detalle-pago',
  templateUrl: './detalle-pago.component.html',
  styleUrls: ['./detalle-pago.component.css']
})
export class DetallePagoComponent implements OnInit {

  public url: any;
  public token: any;
  public pago: any = {};
  public load_data = true;
  public id: any;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _title: Title,
    private _toastrService: ToastrService
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');

    this.url = GLOBAL.url;

    this._route.params.subscribe(
      params => {
        this.id = params['id'];

        this.init_data();
      }
    );
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Detalle de pago')
  }

  init_data() {
    this._userService.obtener_pago_admin(this.id, this.token).subscribe(
      response => {

        if (response.data != undefined) {
          this.pago = response.data;

          this.load_data = false;
        } else {
          this.pago = undefined;
        }

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

}
