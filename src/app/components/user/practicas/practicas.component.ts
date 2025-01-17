import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent implements OnInit {

  constructor(
    private _title: Title,
    private _userService: UserService
  ) {

  }

  ngOnInit(): void {
    this._title.setTitle('Prácticas');
  }

}
