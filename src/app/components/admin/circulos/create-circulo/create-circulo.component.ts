import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-create-circulo',
  templateUrl: './create-circulo.component.html',
  styleUrls: ['./create-circulo.component.css']
})

export class CreateCirculoComponent implements OnInit {

  public circulo : any = {
    color_fondo: '#FFFFFF',
    color_borde: '#FFFFFF'
  };
  public token;
  public load_btn = false;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _title: Title,
    private _toastrService: ToastrService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Registrar Círculo de estudios');
  }

  registro(registroForm: any){
    if(registroForm.valid){
      this.load_btn = true;
      this._userService.registro_circulo_admin(this.circulo, this.token).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else {

            this._toastrService.success('Se registró con éxito', 'REGISTRADO!');

            this._router.navigate(['/admin/circulos']);
          }
        }
      );
    }
  }

}

