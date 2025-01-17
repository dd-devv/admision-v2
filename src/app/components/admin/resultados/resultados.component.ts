import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public usuarios: Array<any> = [];
  public load_data = true;
  public token;
  p: number = 1;
  public resultadosExamen: Array<any> = [];
  public dataExamen: Array<any> = [];
  public sumatoria = 0;

  constructor(
    private _userService: UserService,
    private _title: Title
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');

    this.init_data();
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Ranking por simulacros');
  }

  init_data() {
    this._userService.obtener_ranking_usuarios(this.token).subscribe(
      response => {
        this.usuarios = response.data;
        this.load_data = false;
      }
    );
  }

  obtener_examenes_user(id: any) {
    this.resultadosExamen  = [];
    this.sumatoria = 0;
    //RESULTADOS DE Exámenes
    this._userService
    .obtener_resultados_examen(id, this.token)
    .subscribe((response) => {
        this.resultadosExamen = response.data;

        this.dataExamen = [];
        if (this.resultadosExamen.length > 0) {
          for (let i = 0; i < this.resultadosExamen.length; i++) {
            this.dataExamen.push(this.resultadosExamen[i].nota);
            this.sumatoria = this.sumatoria + this.resultadosExamen[i].nota;
          }
        }
      }
    );
  }

}
