import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';

  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    console.log('leyenda', this.leyenda);
    console.log('progreso', this.progreso);
   }

  ngOnInit() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  onChange( newValue ){

    // let elementoHTML: any = document.getElementsByName('progreso')[0];
    // console.log(elementoHTML.value);
    
    if (newValue > 100) {
      this.progreso = 100;
    } else if (newValue < 0) {
      this.progreso = 0
    } else{
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
  }


  cambiarValor(valor: number){

    if (this.progreso >= 100 && valor > 0) {
      return
    }

    if (this.progreso <= 0 && valor < 100) {
      return
    } 

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }

}
