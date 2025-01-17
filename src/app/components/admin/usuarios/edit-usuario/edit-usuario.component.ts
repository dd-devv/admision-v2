import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

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

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router,
    private _toastrService: ToastrService,
    private _title: Title
  ){
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Editar usuario');
    this.passwClass = 'password';

    //Permitir seleccionar como máximo la fecha actual
    const hoy = new Date();
    const input = document.querySelector("#f_nacimiento")!;
    input.setAttribute("max", hoy.toISOString().split("T")[0]);

    this._route.params.subscribe(
      
      params => {
        this.id = params['id'];
        
        this._userService.obtener_user_admin(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined) {
              this.user = undefined;
              this.load_data = false;
            }else {
              this.user = response.data;
              this.load_data = false;
            }
          }
        );
      }
    );
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

  actualizar(updateForm: any) {    
    if(updateForm.valid) {
      this.load_btn = true;
      this._userService.actualizar_user_admin(this.id, this.user, this.token).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');
          } else {
            this._toastrService.success('Se actualizó con éxito', 'ACTUALIZADO!');

            this._router.navigate(['/admin/usuarios']);
          }
        }
      );
    } else {
      this._toastrService.error('Datos inválidos', 'ERROR');
    }
  }

}
