import { Injectable } from '@angular/core';
import { MiHttpService } from "./mi-http.service";
import { Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class UsuarioService {

  usuarios: Usuario[];  
  logged: boolean = false;
  elUsuario: Usuario;
  token: string = null;

  jwtauth = new JwtHelperService();

  constructor(public _http: MiHttpService) {
    //this.elUsuario = new Usuario();
    this.token = localStorage.getItem("token");

    if (!this.comprobarTokenExpirado(this.token)) {
      this.logged = true;
      this.decodificarToken();
    }
  }

  traerUsuarios(): Observable<Usuario[]>{
    return this._http.GET("/usuario/");
  }

  registrarUsuario(usuario:Usuario){
    return this._http.POST("/usuario/", usuario);
  }

  loguearUsuario(sesion){
    return this._http.POST("/usuario/login", sesion);
  }

  desloguearUsuario(){
    this.logged = false;
    localStorage.removeItem("token");
    this.elUsuario = null;
  }

  comprobarTokenExpirado(token){
    let isExpired = this.jwtauth.isTokenExpired(token);
    //console.log(isExpired);

    return isExpired;
  }

  decodificarToken(){
    let payload = this.jwtauth.decodeToken(this.token);
    
    this.elUsuario = payload.data;
    console.log(this.elUsuario);
  }
}