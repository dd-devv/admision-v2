import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../../../services/pregunta.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-anatomia',
  templateUrl: './create-anatomia.component.html',
  styleUrls: ['./create-anatomia.component.css']
})

export class CreateAnatomiaComponent implements OnInit {
  public token: any;
  public load_btn = false;
  public valid = false;
  public pregunta: any = {};
  public check_a = false;
  public check_b = false;
  public check_c = false;
  public check_d = false;
  public check_e = false;

  constructor(
    private _preguntaService: PreguntaService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
  }

  registro(registroForm: any) {

    if (this.check_a && this.check_b == false && this.check_c == false && this.check_d == false && this.check_e == false) {
      this.valid = true;
      this.pregunta.alt_a = [
        this.pregunta.alt_a,
        this.check_a
      ];
    }

    if (this.check_b && this.check_a == false && this.check_c == false && this.check_d == false && this.check_e == false) {
      this.valid = true;
      this.pregunta.alt_b = [
        this.pregunta.alt_b,
        this.check_b
      ];
    }

    if (this.check_c && this.check_a == false && this.check_b == false && this.check_d == false && this.check_e == false) {
      this.valid = true;
      this.pregunta.alt_c = [
        this.pregunta.alt_c,
        this.check_c
      ];
    }

    if (this.check_d && this.check_a == false && this.check_b == false && this.check_c == false && this.check_e == false) {
      this.valid = true;
      this.pregunta.alt_d = [
        this.pregunta.alt_d,
        this.check_d
      ];
    }

    if (this.check_e && this.check_a == false && this.check_b == false && this.check_c == false && this.check_d == false) {
      this.valid = true;
      this.pregunta.alt_e = [
        this.pregunta.alt_e,
        this.check_e
      ];

    }

    if (registroForm.valid) {
      if (this.valid) {
        this.load_btn = true;
        this._preguntaService.agregar_pregunta_anatomia(this.pregunta, this.token).subscribe(
          response => {
            if (response.data == undefined) {
              this._toastrService.error(response.message, 'ERROR');

            } else {

              this._toastrService.success('Se registró con éxito', 'REGISTRADO!');

              this._router.navigate(['/admin/anatomia']);
            }

          });
      } else {
        this.valid = false;
        this._toastrService.error('Marque una respuesta correcta!!!', 'ERROR');
      }
    }

  }
}
