import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public contacto: any = {};
  public load_btn = false;
  public user_lc: any = {};

  constructor(
    private _title: Title,
    private _toastrService: ToastrService,
    private _userService: UserService
  ) {

    this.user_lc = JSON.parse(localStorage.getItem('user_data')!);

    this.contacto.cliente = this.user_lc.nombres + ' ' + this.user_lc.apellidos;
    this.contacto.correo = this.user_lc.email;
    this.contacto.telefono = this.user_lc.telefono;
  }

  ngOnInit(): void {
    this._title.setTitle('Contacto');
  }

  registro(registroForm: any) {
    if(registroForm.valid) {
      this.load_btn = true;
      this._userService.enviar_mensaje_contacto(this.contacto).subscribe(
        response =>{
          this._toastrService.success('Se envió correctamente el mensaje', 'ENVIADO!');
          this.contacto = {};
          this.load_btn = false;

        }
      );
    } else {
      this._toastrService.error('No se envió, error!', 'ERROR!');
    }
  }

}
