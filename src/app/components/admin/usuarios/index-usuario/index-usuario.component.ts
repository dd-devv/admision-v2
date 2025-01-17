import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent implements OnInit {

  public usuarios: Array<any> = [];
  public user: any = {};
  public filtro = '';
  public token;
  public load_data = true;
  public show_alert_void = false;
  p: number = 1;

  constructor(
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _title: Title
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this.init_data();

    this._title.setTitle('ADMIN | Usuarios');
  }

  init_data() {
    this._userService.listar_usuarios_filtro_admin(this.filtro, this.token).subscribe(
      response => {
        this.usuarios = response.data;
        this.load_data = false;
      }
    );
  }

  filtrar() {
    if (this.filtro) {
      this.show_alert_void = false;
      this._userService.listar_usuarios_filtro_admin(this.filtro, this.token).subscribe(
        response => {
          this.usuarios = response.data;
          this.load_data = false;

          if (this.usuarios.length == 0) {
            this.show_alert_void = true;
          }
        },
      );
    }
    if (this.filtro == '') {
      this.init_data();
    }
  }

  obtener_user(id: any) {
    this._userService.obtener_user_admin(id, this.token).subscribe(
      response => {
        if (response.data == undefined) {
          this.user = undefined;
        } else {
          this.user = response.data;
        }
      }
    );
  }

  eliminar(id: any) {
    this._userService.eliminar_user_admin(id, this.token).subscribe(
      response => {
        this._toastrService.success('Se eliminó con éxito', 'ELIMINADO!');
        window.location.reload();
        this.init_data();
      }
    );
  }

}
