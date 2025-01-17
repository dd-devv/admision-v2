import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-codigo-ref',
  templateUrl: './codigo-ref.component.html',
  styleUrls: ['./codigo-ref.component.css']
})
export class CodigoRefComponent implements OnInit {

  public user: any;
  
  constructor(
    private _title: Title
  ) {
    this.user = JSON.parse(localStorage.getItem('user_data')!);
  }

  ngOnInit(): void {
    this._title.setTitle('Perfil | Mi código');
  }
}
