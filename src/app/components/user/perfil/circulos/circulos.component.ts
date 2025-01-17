import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-circulos',
  templateUrl: './circulos.component.html',
  styleUrls: ['./circulos.component.css']
})

export class CirculosComponent implements OnInit {

  public token: any;
  public circulos: Array<any> = [];
  public load_btn = false;
  public load_data = true;

  constructor(
    private _title: Title,
    private _userService: UserService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('Perfil | Círculos de estudios');

    this.init_data();
  }

  init_data() {
    this._userService.obtener_circulos(this.token).subscribe(
      response => {
        this.circulos = response.data;
        this.load_data = false;
      }
    );
  }
}


