import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {

  public codigo = '';
  public id: any;

  constructor(
    private _title: Title,
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _router: Router
  ) {

    this.id = localStorage.getItem('_id');
  }

  ngOnInit(): void {
    this._title.setTitle('Verificar correo');
  }


  verificar(verificarForm: any) {
    if (verificarForm.valid) {
      this._userService.actualizar_user_verificado(this.id, this.codigo).subscribe(
        response => {
          if (response.data != undefined) {
            this._toastrService.success('Se verificó correctamente', 'VERIFICADO!');
            this._router.navigate(['/login']);
          } else {
            this._toastrService.error('Código incorrecto, vuelve a intentarlo', 'ERROR');
            this.codigo = '';
          }
        }
      );
    }
  }

}
