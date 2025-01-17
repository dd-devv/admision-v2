import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-edit-circulo',
  templateUrl: './edit-circulo.component.html',
  styleUrls: ['./edit-circulo.component.css']
})

export class EditCirculoComponent implements OnInit {

  public circulo : any = {};
  public token;
  public id: any;
  public load_btn = false;
  public load_data = true;

  constructor(
    private _title: Title,
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Aditar Círculo de estudios');

    this._route.params.subscribe(

      params => {
        this.id = params['id'];

        this._userService.obtener_circulo_admin(this.id, this.token).subscribe(
          response => {
            if(response.data == undefined) {
              this.circulo = undefined;
              this.load_data = false;
            }else {
              this.circulo = response.data;
              this.load_data = false;
            }
          }
        );
      }
    );
  }

  actualizar(actualizarForm: any){

    if(actualizarForm.valid){
      this.load_btn = true;
      this._userService.actualizar_circulo_admin(this.id, this.circulo, this.token).subscribe(
        response => {
          if (response.data == undefined) {
            this._toastrService.error(response.message, 'ERROR');

          } else {

            this._toastrService.success('Se actualizó con éxito', 'ACTUALIZADO!');

            this._router.navigate(['/admin/circulos']);
          }
        }
      );
    }
  }

}
