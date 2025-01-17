import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../../../services/pregunta.service';
import { ToastrService } from 'ngx-toastr';
import { GLOBAL } from '../../../../../services/global';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index-literatura',
  templateUrl: './index-literatura.component.html',
  styleUrls: ['./index-literatura.component.css']
})


export class IndexLiteraturaComponent implements OnInit {

  public load_data = true;
  public filtro = '';
  public token: any;
  public preguntas: Array<any> = [];
  public arr_preguntas: Array<any> = [];
  public url: any;
  public load_btn = false;
  public show_alert_void = false;
  p: number = 1;

  constructor(
    private _preguntaService: PreguntaService,
    private _toastrService: ToastrService,
    private _title: Title
    ) {
      this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
      this.url = GLOBAL.url;
    }
  
    ngOnInit(): void {
      this.init_data();
      this._title.setTitle('ADMIN | Literatura');
    }

  init_data() {
    this._preguntaService.listar_preguntas_filtro_literatura(this.filtro, this.token).subscribe(
      response => {
        this.preguntas = response.data;
        this.load_data = false;
      }
    );
  }

  filtrar() {
    if (this.filtro) {
      this.show_alert_void = false;
      this._preguntaService.listar_preguntas_filtro_literatura(this.filtro, this.token).subscribe(
        response => {
          this.preguntas = response.data;
          this.load_data = false;

          if (this.preguntas.length == 0) {
            console.log('No existe');
            this.show_alert_void = true;
          }
        },
      );
    }
    if (this.filtro == '') {
      this.init_data();
      this.show_alert_void = false;
    }
  }

  eliminar(id: any) {
    this._preguntaService.eliminar_pregunta_literatura(id, this.token).subscribe(
      response => {
        this._toastrService.success('Se eliminó con éxito', 'ELIMINADO!');
        window.location.reload();
        this.init_data();
      }
    );
  }

}
