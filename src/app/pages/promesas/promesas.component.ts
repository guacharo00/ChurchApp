import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

    this.contaTres().then(
      ()=> console.log('Termino...')
    )
    .catch( error => console.log("Error en la promesa.", error) )

    
   }

  ngOnInit() {
  }

  contaTres( ) {
    let promesa = new Promise( (resolve, reject) => {
      
    let contador = 0;

    let intervalo = setInterval( ()=>{
        
        contador += 1;  
        console.log(contador);

      if (contador === 3) {
        // reject('Simplemente un error');
        resolve('ok termino');
        clearInterval(intervalo)
      }

      },1000);

  });

    return promesa;

  }

}
