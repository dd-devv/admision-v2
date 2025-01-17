import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-index-cuentas',
  templateUrl: './index-cuentas.component.html',
  styleUrls: ['./index-cuentas.component.css']
})
export class IndexCuentasComponent implements OnInit {

  public token: any;
  public cuentas: Array<any> = [];
  public load_btn = false;
  public load_data = true;

  constructor(
    private _title: Title,
    private _userService: UserService,
    private _toastrService: ToastrService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Cuentas');

    this.init_data();
  }

  init_data() {
    this._userService.obtener_cuentas_admin(this.token).subscribe(
      response => {
        this.cuentas = response.data;
        this.load_data = false;
      }
    );
  }

  eliminar(id: any) {
    this.load_btn = true;
    this._userService.eliminar_cuenta_admin(id, this.token).subscribe(
      response => {
        this._toastrService.success('Se eliminó con éxito', 'ELIMINADO!');

        this.load_btn = false;
        this.init_data();
      }
    );
  }

}
