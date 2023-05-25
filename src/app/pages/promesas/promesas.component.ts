import { Component } from '@angular/core';
import { ResolveStart } from '@angular/router';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent {

  constructor() {
    
    // promesa.then(
    //   () => console.log('Terminó!'),
    //   () => console.log('Error!') //catch
    // )

    this.contarTres().then(
      mensaje => console.log('Terminó!', mensaje)
    ).catch( error => console.error('Error en la promesa', error) );

  }

  contarTres(): Promise<boolean> {
    return new Promise<boolean>( (resolve, reject) => {

      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          //reject(false);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
