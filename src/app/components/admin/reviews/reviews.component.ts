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

  public reviews: Array<any> = [];
  public load_data = true;
  public token;
  p: number = 1;

  constructor(
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _title: Title
  ) {
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');

    this.init_data();
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Reseñas');
  }

  init_data() {
    this._userService.obtener_reviews().subscribe(
      response => {
        this.reviews = response.data;
        this.load_data = false;
      }
    );
  }

  destacar_review(id: any){
    this._userService.destacar_review_admin(id, {data: undefined}, this.token).subscribe(
      response => {
        if (response.data == undefined) {
          this._toastrService.error(response.message, 'ERROR');
        } else {
          this._toastrService.success('Se destacó con éxito', 'DESTACADO!');

          this.init_data();
        }
      }
    );
  }

  eliminar_review(id: any){
    this._userService.eliminar_review_admin(id, this.token).subscribe(
      response => {
        if (response.data == undefined) {
          this._toastrService.error(response.message, 'ERROR');
        } else {
          this._toastrService.success('Se eliminó con éxito', 'ELIMINADO!');

          this.init_data();
        }
      }
    );
  }

}
