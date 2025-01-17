import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-index-circulo',
  templateUrl: './index-circulo.component.html',
  styleUrls: ['./index-circulo.component.css']
})

export class IndexCirculoComponent implements OnInit {

  public token: any;
  public circulos: Array<any> = [];
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
    this._title.setTitle('ADMIN | Círculo de estudio');

    this.init_data();
  }

  init_data() {
    this._userService.obtener_circulos_admin(this.token).subscribe(
      response => {
        this.circulos = response.data;
        this.load_data = false;
      }
    );
  }

  eliminar(id: any) {
    this.load_btn = true;
    this._userService.eliminar_circulo_admin(id, this.token).subscribe(
      response => {
        this._toastrService.success('Se eliminó con éxito', 'ELIMINADO!');

        this.load_btn = false;
        this.init_data();
      }
    );
  }

}

