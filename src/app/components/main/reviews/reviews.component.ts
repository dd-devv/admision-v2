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
  public id;
  public load_data = true;
  p: number = 1;

  constructor(
    private _userService: UserService,
    private _title: Title,
    private _toastrService: ToastrService
  ) {

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
}
