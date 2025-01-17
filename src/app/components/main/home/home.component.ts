import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public token: any;
  public id: any;
  public user: any;
  public user_lc: any;
  public url: any;
  public reviews: Array<any> = [];
  public reviewsDestacados: Array<any> = [];
  screenWidth: number = 0;
  screenHeight: number = 0;

  public imagen_fondo: String = '';
  @ViewChild('textoAnimado') textoAnimado: any;
  texto: string = '';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  constructor(
    private _title: Title,
    private _userService: UserService,
    private _router: Router
  ) {

    this.url = GLOBAL.url;
    this.user_lc = undefined;

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');

    if (this.token) {
      //Obtener usuario
      this._userService.obtener_user(this.id, this.token).subscribe(
        response => {
          this.user = response.data;
          localStorage.setItem('user_data', JSON.stringify(this.user));

          if (localStorage.getItem('user_data')) {
            this.user_lc = JSON.parse(localStorage.getItem('user_data')!);

            if (this.user_lc.role == 'ADMIN') {
             this._router.navigate(['/admin']);

            } else if(this.user_lc.role == 'USER') {
              this._router.navigate(['/usuario']);
            }
          } else {
            this.user_lc = undefined;
          }
        }
      );
    }

    if (this.screenWidth < this.screenHeight) {
      this.imagen_fondo = '../../../../assets/img/fondo-comentario.jpg';
    } else {
      this.imagen_fondo = '../../../../assets/img/fondo-coment.png';
    }

    this.init_data();
  }

  init_data() {
    this._userService.obtener_reviews().subscribe(
      response => {
        this.reviews = response.data;

        for (let i = 0; i < this.reviews.length; i++) {
          if (this.reviews[i].destacado) {
            this.reviewsDestacados.push(this.reviews[i]);
          } 
        }
      }
    );
  }

  ngOnInit(): void {
    this._title.setTitle('Inicio');
  }

  ngAfterViewInit(): void {
    let textoCompleto = 'Hola, soy un texto animado!';
    let i = 0;
    let intervalo = setInterval(() => {
      this.texto += textoCompleto.charAt(i);
      i++;
      if (i > textoCompleto.length) {
        clearInterval(intervalo);
      }
    }, 50);
  }

  seleccionar_plan(plan: string) {
    localStorage.setItem('plan', plan);
    this._router.navigate(['/registro']);
  }

}
