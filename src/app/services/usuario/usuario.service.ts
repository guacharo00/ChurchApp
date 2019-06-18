import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public _http: HttpClient
  ) { 
    console.log('Servicio de usuario listo!');  
   }

  loginUsuario( usuario: Usuario, recordar: boolean ){

    let url = URL_SERVICE + '/login';
    return this._http.post( url, usuario );

  }

  crearUsuario( usuario: Usuario ){

    let url = URL_SERVICE + '/user';

   return this._http.post(url, usuario)
          .pipe(

            map( (res: any) => {

            swal('Usuario creado correctamente', usuario.nombre, 'success');

            return res.usuario;
            })
          )

  };


};
