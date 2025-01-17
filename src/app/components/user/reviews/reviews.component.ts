import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public review = '';
  public reviews: Array<any> = [];
  public token;
  public id;
  public load_data = true;
  public valoracion: number = 5;
  p: number = 1;

  constructor(
    private _userService: UserService,
    private _title: Title,
    private _toastrService: ToastrService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');

    this.init_data();
  }

  ngOnInit(): void {
    this._title.setTitle('Reseñas');
  }

  init_data() {
    this._userService.obtener_reviews().subscribe(
      response => {
        this.reviews = response.data;
        this.load_data = false;
      }
    );
  }

  registro(registroForm: any) {

    let data = {
      user: this.id,
      estrellas: this.valoracion,
      comentario: this.review,
      destacado: false
    }

    this._userService.registro_review_user(data, this.token).subscribe(
      response => {
        if (response.data == undefined) {
          this._toastrService.error(response.message, 'ERROR');

        } else {
          this._toastrService.success('Se registró con éxito', 'GRACIAS POR SU OPINIÓN!');
          this.init_data();
          this.review = '';
        }

      }
    );
  }

}
