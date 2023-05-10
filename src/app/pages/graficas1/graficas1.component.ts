import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component {
/*
  graficos: any = {
    'grafico1': {
      'type': 'doughnut',
      'leyenda': 'El pan se come con',
      'data': {
        labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
        datasets: [
          { data: [24, 30, 46] }
        ]
      }
    },
    'grafico2': {
      'type': 'doughnut',
      'leyenda': 'Entrevistados',
      'data': {
        labels: ['Hombres', 'Mujeres'],
        datasets: [
          { data: [4500, 6000] }
        ]
      }
    },
    'grafico3': {
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?',
      'data': {
        labels: ['Si', 'No'],
        datasets: [
          { data: [95, 5] }
        ]
      }
    },
    'grafico4': {
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?',
      'data': {
        labels: ['Si', 'No'],
        datasets: [
          { data: [85, 15] }
        ]
      }
    }
  };
  */
  
  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'polarArea',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'pie',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'pie',
      'leyenda': '¿Le importa que le den gases?'
    },
  };
}
