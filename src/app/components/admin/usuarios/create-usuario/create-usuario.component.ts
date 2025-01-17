import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  public user: any = {
    genero: '',
    universidad: '',
    area: '',
    escuela: '',
    role: ''
  };
  public password: any;
  public password1 = '';
  public show = false;
  public alert_pass = false;
  
  public universidades: Array<any> = [];
  public areas: Array<any> = [];
  public escuelas: Array<any> = [];

  public areas_arr: Array<any> = [];
  public escuelas_arr: Array<any> = [];
  public vacio = true;

  isDisabledArea = true;
  isDisabledEscuela = true;

  public valid = false;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _title: Title,
    private _toastrService: ToastrService
  ) {
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
    this._title.setTitle('ADMIN | Registro de usuario');
    this.password = 'password';

    //Permitir seleccionar como máximo la fecha actual
    const hoy = new Date();
    const input = document.querySelector("#f_nacimiento")!;
    input.setAttribute("max", hoy.toISOString().split("T")[0]);
  }

  //Comparar contraseñas
  compare_password() {
    if (this.password1 == this.user.password) {
      this.alert_pass = false;
      this.valid = true;

    } else if (this.password1 != this.user.password) {
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

  registrar(registroForm: any) {
    if (registroForm.valid) {

      let data = {
        nombres: this.user.nombres,
        apellidos: this.user.apellidos,
        dni: this.user.dni,
        email: this.user.email,
        telefono: this.user.telefono,
        password: this.user.password,
        genero: this.user.genero,
        f_nacimiento: this.user.f_nacimiento,
        role: this.user.role
      }

      this._userService.registro_user(data).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else {

            this._toastrService.success('Se registró con éxito', 'REGISTRADO!');

            this._router.navigate(['/admin/usuarios']);
          }
        }
      );
    } else {
      this._toastrService.error('Los datos del formulario no son válidos', 'ERROR');
    }

  }

  onClickPass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
