import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';


declare function init_pluging()

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  forValido: boolean;

  constructor( private usuarioService: UsuarioService,
               private router: Router ) { }

  sonnIguales( campo1: string, campo2: string ) {

    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null
      }

      return {
        sonIguales: true
      }

    }

  }

  ngOnInit() {

    init_pluging()

    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false ),
    }, { validators: this.sonnIguales( 'password', 'password2' ) })

    this.forma.setValue({
      nombre: 'Test1',
      email: 'test1@test1.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    })

  }

 

  registrarUsuario() {

    if (!this.forma.valid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      swal("Importante", "Deve aceptar las condiciones", "warning");
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    this.usuarioService.crearUsuario( usuario )
                       .subscribe( res => {

                        console.log(res);

                        this.router.navigate(['/login']);

                       })
    
  }

}