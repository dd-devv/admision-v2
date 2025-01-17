import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../../../services/pregunta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-algebra',
  templateUrl: './edit-algebra.component.html',
  styleUrls: ['./edit-algebra.component.css']
})
export class EditAlgebraComponent implements OnInit {

  public token: any;
  public id: any;
  public load_btn = false;
  public load_data = true;
  public pregunta: any = {};
  public valid = false;

  public check_a = false;
  public check_b = false;
  public check_c = false;
  public check_d = false;
  public check_e = false;

  constructor(
    private _preguntaService: PreguntaService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _toastrService: ToastrService
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._route.params.subscribe(

      params => {
        this.id = params['id'];

        this._preguntaService.obtener_pregunta_algebra(this.id, this.token).subscribe(
          response => {
            if (response.data == undefined) {
              this.pregunta = undefined;
              this.load_data = false;
            } else {
              this.pregunta = response.data;

              if (this.pregunta.alt_a[1] == true) {
                this.check_a = true;

              } else if (this.pregunta.alt_b[1] == true) {
                this.check_b = true;

              } else if (this.pregunta.alt_c[1] == true) {
                this.check_c = true;

              } else if (this.pregunta.alt_d[1] == true) {
                this.check_d = true;

              } else if (this.pregunta.alt_e[1] == true) {
                this.check_e = true;
              }

              this.load_data = false;
            }
          }
        );
      }
    );
  }

  actualizar(actualizarForm: any) {

    if (this.check_a && this.check_b == false && this.check_c == false && this.check_d == false && this.check_e == false) {
      this.valid = true;
      this.check_b = false;
      this.check_c = false;
      this.check_d = false;
      this.check_e = false;
      this.pregunta.alt_a = [
        this.pregunta.alt_a,
        this.check_a
      ];
    }

    if (this.check_b && this.check_a == false && this.check_c == false && this.check_d == false && this.check_e == false) {
      this.valid = true;
      this.check_a = false;
      this.check_c = false;
      this.check_d = false;
      this.check_e = false;
      this.pregunta.alt_b = [
        this.pregunta.alt_b,
        this.check_b
      ];
    }

    if (this.check_c && this.check_a == false && this.check_b == false && this.check_d == false && this.check_e == false) {
      this.valid = true;
      this.check_a = false;
      this.check_b = false;
      this.check_d = false;
      this.check_e = false;
      this.pregunta.alt_c = [
        this.pregunta.alt_c,
        this.check_c
      ];
    }

    if (this.check_d && this.check_a == false && this.check_b == false && this.check_c == false && this.check_e == false) {
      this.valid = true;
      this.check_a = false;
      this.check_b = false;
      this.check_c = false;
      this.check_e = false;
      this.pregunta.alt_d = [
        this.pregunta.alt_d,
        this.check_d
      ];
    }

    if (this.check_e && this.check_a == false && this.check_b == false && this.check_c == false && this.check_d == false) {
      this.valid = true;
      this.check_a = false;
      this.check_b = false;
      this.check_c = false;
      this.check_d = false;
      this.pregunta.alt_e = [
        this.pregunta.alt_e,
        this.check_e
      ];

    }

    if (actualizarForm.valid) {
      if (this.valid) {
        this.load_btn = true;
        this._preguntaService.actualizar_pregunta_algebra(this.id, this.pregunta, this.token).subscribe(
          response => {
            if (response.data == undefined) {
              this._toastrService.error(response.message, 'ERROR');

            } else {

              this._toastrService.success('Se actualizó con éxito', 'ACTUALIZADO!');

              this._router.navigate(['/admin/algebra']);
            }

          });
      } else {
        this.valid = false;
        this._toastrService.error('Marque una respuesta correcta!!!', 'ERROR');
      }
    }
  }

}
