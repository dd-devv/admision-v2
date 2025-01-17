import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public usuarios: Array<any> = [];
  public token: any;
  public id: any;
  //public filtro = '';

  constructor(
    private _title: Title,
    private _userService: UserService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
  }

  ngOnInit(): void {
    this._title.setTitle('Rankings');
    this.init_data();
  }

  init_data() {
    this._userService.obtener_ranking_usuarios(this.token).subscribe(
      response => {
        this.usuarios = response.data;
      }
    );
  }

  // filtrar() {
  //   if (this.filtro) {
  //     this._userService.obtener_ranking_usuarios(this.filtro, this.token).subscribe(
  //       response => {
  //         this.usuarios = response.data;
  //       },
  //     );
  //   }
  //   if (this.filtro == '') {
  //     this.init_data();
  //   }
  // }

}
