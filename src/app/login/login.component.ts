import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UsuarioService } from '../services/service.index';

declare function init_pluging()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;

  constructor( public router: Router,
               public _usuarioService: UsuarioService  
      ){ }

  ngOnInit() {
    init_pluging()
  }

  ingresar( forma: NgModel ){

    console.log(forma.valid);
    console.log(forma.value);

    
    // this.router.navigate(['/dashboard'])
  }

}
