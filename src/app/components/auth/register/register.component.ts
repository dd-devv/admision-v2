import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = {
    genero: '',
    universidad: '',
    area: '',
    escuela: ''
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

  public recordar = true;

  public plan: any;

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

    this.plan = localStorage.getItem('plan');
  }

  ngOnInit(): void {
    this._title.setTitle('Registro de usuario');
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

  select_universidad() {
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

  select_area() {
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
        universidad: this.user.universidad,
        carrera: this.user.escuela,
        area: this.user.area
      }

      this._userService.registro_user(data).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else if (response.data != undefined) {
            localStorage.setItem('_id', response.data._id);

            this._userService.enviar_correo_confirmacion(response.data._id).subscribe({
              next: (res) => {
                console.log(res);

                this._toastrService.success('Se envió el código de verificación', 'ENVIADO!');
                this._router.navigate(['/verificar']);
              },
              error: (err) => {
                console.log(err);

              }
            });
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
