import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions, ChartType, Chart } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
  
  // Doughnut
  @Input() chartType: any = 'doughnut';
  //type: ChartType = 'doughnut';//this.chartType;
  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  // La asignación de valores en esta declaración no tiene efecto sobre el gráfico
  // La verdadera asignación se hace en el ngOnInit, pero como es necesario inicializar
  // la var, se ha declarado con los valores vacíos.
  data: ChartData = {
    labels: [],
    datasets: [{ data: [] }]
  };

  ngOnInit(): void {
    this.data = {
      labels: this.chartLabels,
      datasets: [{ data: this.chartData }]
    };
/*
    // Forma alternativa de asignar los valores
    this.data.datasets[0].data = this.chartData;
    this.data.labels = this.chartLabels;
*/



    if (this.data != null) {
      //console.log('this.data.labels: ', this.data.labels);
      //console.log('chartLabels: ', this.chartLabels);
      //console.log('this.data.datasets[0].data: ', this.data.datasets[0].data);
      //console.log('chartData: ', this.chartData);
      //console.log('chartType: ', this.chartType, typeof this.chartType);
      //console.log('type of data: ', typeof this.data);
      //console.log('type: ', this.type);
      //console.log('data: ', this.data);
      //console.log('**************************');
    }
  }

  constructor() {
    //console.log('data: ', this.data);
  }

}
