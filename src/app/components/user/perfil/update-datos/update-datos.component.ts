import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-update-datos',
  templateUrl: './update-datos.component.html',
  styleUrls: ['./update-datos.component.css']
})


export class UpdateDatosComponent implements OnInit {

  public user: any = {};
  public id: any;
  public token;
  public load_btn = false;
  public load_data = true;
  public passwClass: any;
  public pass: any;
  public pass1: any;
  public alert_pass = false;
  public show = false;
  public valid = false;

  public universidades: Array<any> = [];
  public areas: Array<any> = [];
  public escuelas: Array<any> = [];

  public areas_arr: Array<any> = [];
  public escuelas_arr: Array<any> = [];
  public vacio = true;

  isDisabledArea = true;
  isDisabledEscuela = true;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _toastrService: ToastrService,
    private _title: Title
  ){
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user_data')!);
    this.id = this.user._id;

    //Obtener universidades
    this._userService.obtener_universidades().subscribe(
      response => {
        this.universidades = response;
      }
    );

    //Obtener areas
    this._userService.obtener_areas().subscribe(
      response => {
        this.areas_arr = response;
      }
    );

    //Obtener escuelas
    this._userService.obtener_escuelas().subscribe(
      response => {
        this.escuelas_arr = response;
      }
    );
  }

  ngOnInit(): void {
    this._title.setTitle('Perfil | Actualizar datos');
    this.passwClass = 'password';

    //Permitir seleccionar como máximo la fecha actual
    const hoy = new Date();
    const input = document.querySelector("#f_nacimiento")!;
    input.setAttribute("max", hoy.toISOString().split("T")[0]);
  }

  onClickPass() {
    if (this.passwClass === 'password') {
      this.passwClass = 'text';
      this.show = true;
    } else {
      this.passwClass = 'password';
      this.show = false;
    }
  }

  //Comparar contraseñas
  compare_password() {
    if (this.pass1 == this.pass) {
      this.alert_pass = false;
      this.valid = true;

      if(this.pass != '') {
        this.user.password = this.pass;
      }


    } else if (this.pass1 != this.pass) {
      this.alert_pass = true;
      this.valid = false;
    }
  }

  select_universidad(){
    this.areas = [];
    this.escuelas = [];
    this.isDisabledArea = false;
    this.isDisabledEscuela = true;
    this.user.area = '';
    this.user.escuela = '';
    this._userService.obtener_areas().subscribe(
      response => {
        response.forEach((element: { universidad_id: any; }) => {
          if (element.universidad_id == this.user.universidad) {
            this.areas.push(element);
          }
        });
      }
    );
  }

  select_area(){
    this.escuelas = [];
    this.isDisabledEscuela = false;
    this.user.escuela = '';
    this._userService.obtener_escuelas().subscribe(
      response => {
        response.forEach((element: { area_name: any; }) => {
          if (element.area_name == this.user.area) {
            this.escuelas.push(element);
          }
        });
      }
    );
  }

  actualizar(updateForm: any) {
    if(updateForm.valid) {
      this.load_btn = true;
      this._userService.actualizar_user(this.id, this.user, this.token).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');
          } else {
            this._toastrService.success('Se actualizó con éxito', 'ACTUALIZADO!');

            this._router.navigate(['/usuario']);
          }
        }
      );
    } else {
      this._toastrService.error('Datos inválidos en el formulario', 'ERROR');
    }
  }

}

