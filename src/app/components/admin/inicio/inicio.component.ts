import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Chart from 'chart.js/auto';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public token: any;
  public chart: any;
  public cantidad = 0;
  public ganancia_total = 0;
  public total_mes = 0;
  public total_mes_anterior = 0;
  public total_mes_sim = 0;
  public total_mes_anterior_sim = 0;
  public count_ventas = 0;
  public load_data = true;

  constructor(
    private _title: Title,
    private _userService: UserService
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  ngOnInit(): void {
    this._title.setTitle('ADMIN | Inicio');
    this.init_data();
  }

  init_data() {
    this._userService.kpi_ganancias_mensuales_admin(this.token).subscribe(
      response => {
        this.ganancia_total = response.ganancia_total;
        this.total_mes = response.total_mes;
        this.total_mes_anterior = response.total_mes_anterior;
        this.count_ventas = response.count_ventas;
        this.chart = new Chart("MyChart", {
          type: 'bar', //this denotes tha type of chart

          data: {// values on X-Axis
            labels: ['Enero',
              'Febrero',
              'Marzo',
              'Abril',
              'Mayo',
              'Junio',
              'Julio',
              'Agosto',
              'Septiembre',
              'Octubre',
              'Noviembre',
              'Diciembre'],
            datasets: [
              {
                label: "Pagos en S/.",
                data: [response.enero,
                response.febrero,
                response.marzo,
                response.abril,
                response.mayo,
                response.junio,
                response.julio,
                response.agosto,
                response.septiembre,
                response.octubre,
                response.noviembre,
                response.diciembre],
                backgroundColor: 'rgb(111, 66, 192)'
              }
            ]
          },
          options: {
            aspectRatio: 2
          }

        });

      }
    );

    this._userService.obtener_cantidad_usuarios_admin(this.token).subscribe(
      response => {
        this.cantidad = response.data;
      }
    );

    this._userService.cantidad_simuacros_mes_admin(this.token).subscribe(
      response => {
        this.total_mes_sim = response.total_mes;
        this.total_mes_anterior_sim = response.total_mes_anterior;
        this.chart = new Chart("MyChartSim", {
          type: 'bar', //this denotes tha type of chart

          data: {// values on X-Axis
            labels: ['Enero',
              'Febrero',
              'Marzo',
              'Abril',
              'Mayo',
              'Junio',
              'Julio',
              'Agosto',
              'Septiembre',
              'Octubre',
              'Noviembre',
              'Diciembre'],
            datasets: [
              {
                label: "Cantidad de exámenes",
                data: [response.enero,
                response.febrero,
                response.marzo,
                response.abril,
                response.mayo,
                response.junio,
                response.julio,
                response.agosto,
                response.septiembre,
                response.octubre,
                response.noviembre,
                response.diciembre],
                backgroundColor: 'rgb(20, 203, 139)'
              }
            ]
          },
          options: {
            aspectRatio: 2
          }

        });

      }
    );

    this.load_data = false;
  }

}
