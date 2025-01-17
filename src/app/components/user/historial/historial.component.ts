import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { UserService } from '../../../services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  public token: any;
  public id: any;
  public chart: any;

  public resultadosExamen: Array<any> = [];
  public resultados: Array<any> = [];

  constructor(
    private _userService: UserService,
    private _title: Title
    ) {
    this.token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id = localStorage.getItem('_id') || sessionStorage.getItem('_id');
  }
  ngOnInit(): void {
    this.init_data();
    this._title.setTitle('Historial');
  }

  init_data() {

    //RESULTADOS DE Exámenes
    this._userService
    .obtener_resultados_examen(this.id, this.token)
    .subscribe((response) => {
        this.resultadosExamen = response.data;

        let labelExamen = [];
        let dataExamen = [];
        if (this.resultadosExamen.length > 0) {
          for (let i = 0; i < this.resultadosExamen.length; i++) {
            labelExamen.push((i + 1).toString());
            dataExamen.push(this.resultadosExamen[i].nota);
          }

          this.chart = new Chart('MyChartExamen', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelExamen,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(111, 66, 193)',
                  tension: 0.4,
                  label: 'Nota',
                  data: dataExamen,
                },
              ],
            },
            options: {
              aspectRatio: 3,
            },
          });
        }
      }
    );

    //Obtener resultados de prácticas de Álgebra
    this._userService
      .obtener_resultado_practicas_algebra(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelAlgebra = [];
        let dataAlgebra = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelAlgebra.push((i + 1).toString());
            dataAlgebra.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChart', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelAlgebra,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(0, 205, 123)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataAlgebra,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Anatomía
    this._userService
      .obtener_resultado_practicas_anatomia(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelAnatomia = [];
        let dataAnatomia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelAnatomia.push((i + 1).toString());
            dataAnatomia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartAn', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelAnatomia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(255, 67, 73)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataAnatomia,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Aritmética
    this._userService
      .obtener_resultado_practicas_aritmetica(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelAritmetica = [];
        let dataAritmetica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelAritmetica.push((i + 1).toString());
            dataAritmetica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartArit', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelAritmetica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(20, 211, 221)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataAritmetica,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Biología
    this._userService
      .obtener_resultado_practicas_biologia(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelBiologia = [];
        let dataBiologia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelBiologia.push((i + 1).toString());
            dataBiologia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartBio', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelBiologia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(13, 186, 7)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataBiologia,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Economía
    this._userService
      .obtener_resultado_practicas_economia(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelEconomia = [];
        let dataEconomia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelEconomia.push((i + 1).toString());
            dataEconomia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartEco', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelEconomia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(239, 180, 32)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataEconomia,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Educación Cívica
    this._userService
      .obtener_resultado_practicas_ed_civica(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelEdCivica = [];
        let dataEdCivica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelEdCivica.push((i + 1).toString());
            dataEdCivica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartEdCivica', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelEdCivica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(203, 33, 251)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataEdCivica,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Física
    this._userService
      .obtener_resultado_practicas_fisica(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelFisica = [];
        let dataFisica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelFisica.push((i + 1).toString());
            dataFisica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartFisica', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelFisica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(255, 109, 24)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataFisica,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Geografía
    this._userService
      .obtener_resultado_practicas_geografia(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelGeografia = [];
        let dataGeografia = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelGeografia.push((i + 1).toString());
            dataGeografia.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartGeografia', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelGeografia,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(63, 63, 63)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataGeografia,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Geometría
    this._userService
      .obtener_resultado_practicas_geometria(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelGeometria = [];
        let dataGeometria = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelGeometria.push((i + 1).toString());
            dataGeometria.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartGeometria', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelGeometria,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(38, 92, 255)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataGeometria,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Historia del Perú
    this._userService
      .obtener_resultado_practicas_historia_peru(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelHPeru = [];
        let dataHPeru = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelHPeru.push((i + 1).toString());
            dataHPeru.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartHPeru', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelHPeru,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(175, 80, 16)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataHPeru,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Historia Universal
    this._userService
      .obtener_resultado_practicas_historia_universal(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelHUniversal = [];
        let dataHUniversal = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelHUniversal.push((i + 1).toString());
            dataHUniversal.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartHUniversal', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelHUniversal,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(255, 255, 255)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataHUniversal,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Lenguaje
    this._userService
      .obtener_resultado_practicas_lenguaje(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelLenguaje = [];
        let dataLenguaje = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelLenguaje.push((i + 1).toString());
            dataLenguaje.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartLenguaje', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelLenguaje,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(4, 214, 154)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataLenguaje,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Literatura
    this._userService
      .obtener_resultado_practicas_literatura(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelLiteratura = [];
        let dataLiteratura = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelLiteratura.push((i + 1).toString());
            dataLiteratura.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartLiteratura', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelLiteratura,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(226, 48, 190)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataLiteratura,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Química
    this._userService
      .obtener_resultado_practicas_quimica(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelQuimica = [];
        let dataQuimica = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelQuimica.push((i + 1).toString());
            dataQuimica.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartQuimica', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelQuimica,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(0, 217, 90)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataQuimica,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Razonamiento Matemático
    this._userService
      .obtener_resultado_practicas_raz_matematico(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelRazmMatematico = [];
        let dataRazmMatematico = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelRazmMatematico.push((i + 1).toString());
            dataRazmMatematico.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartRazMatematico', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelRazmMatematico,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(255, 84, 124)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataRazmMatematico,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Razonamiento Verbal
    this._userService
      .obtener_resultado_practicas_raz_verbal(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelRazVerbal = [];
        let dataRazVerbal = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelRazVerbal.push((i + 1).toString());
            dataRazVerbal.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartRazVerbal', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelRazVerbal,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(27, 196, 128)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataRazVerbal,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });

    //Obtener resultado de prácticas de Trigonometría
    this._userService
      .obtener_resultado_practicas_trigonometria(this.id, this.token)
      .subscribe((response) => {
        this.resultados = response.data;

        let labelTrigonometria = [];
        let dataTrigonometria = [];
        if (this.resultados.length > 0) {
          for (let i = 0; i < this.resultados.length; i++) {
            labelTrigonometria.push((i + 1).toString());
            dataTrigonometria.push(this.resultados[i].puntos);
          }

          this.chart = new Chart('MyChartTrigonometria', {
            type: 'line', //this denotes tha type of chart

            data: {
              // values on X-Axis
              labels: labelTrigonometria,
              datasets: [
                {
                  fill: false,
                  pointRadius: 5,
                  pointHoverRadius: 10,
                  borderColor: 'rgb(64, 196, 27)',
                  tension: 0.4,
                  label: 'Puntos',
                  data: dataTrigonometria,
                },
              ],
            },
            options: {
              aspectRatio: 2.4,
            },
          });
        }
      });
  }
}
