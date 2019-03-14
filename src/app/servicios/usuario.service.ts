import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MiHttpService } from './mi-http.service';
import { Usuario } from '../clases/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public _user: Usuario;
  public token: string;
  public logueado = new BehaviorSubject(false);
  public registrado = new BehaviorSubject(false);

  jwtauth = new JwtHelperService();

  constructor(public _http: MiHttpService, public router: Router) {
    this.comprobacionInicialToken(); 
  }

  login(usuario: string, clave: string){
    let datos = {
      email: usuario, 
      clave: clave
    };

    this._http.POST("/usuario/login", datos).subscribe(
      data =>{
        console.log(data);
        //EXTRAER token
        localStorage.setItem("token", data["token"]);
        this.token = data["token"];

        //DECODIFICO token y asigno los datos a usuario
        this.asignarDatosToken();

        //AVISAR que se logueó bien
        this.logueado.next(true);
      },
      err => {
        console.log(err);
      }
    );
  }

  login_observable(usuario: string, clave: string){
    let datos = {
      email: usuario, 
      clave: clave
    };

    return this._http.POST("/usuario/login", datos);
  }

  registrar(datos: any){
    this._http.POST("/usuario/", datos).subscribe(
      data =>{
        console.log(data);
        if (data["estado"]=="OK") {
          this.registrado.next(true);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  desloguearUsuario(){
    this.logueado.next(false);
    delete this._user;
    localStorage.removeItem("token");
  }

  comprobacionInicialToken(){
    if (localStorage.getItem("token")) {
      console.log("Hay TOKEN");
      this.token = localStorage.getItem("token");

      if (!this.comprobarTokenExpirado(this.token)) {
        this.asignarDatosToken();
        this.logueado.next(true);
      }

    }
  }

  comprobarTokenExpirado(token){
    let isExpired = this.jwtauth.isTokenExpired(token);
    console.log("Expiro el token?",isExpired);

    return isExpired;
  }

  decodificarToken(){
    let payload = this.jwtauth.decodeToken(this.token);
    //console.log("Payload", payload);

    return payload.data;
  }

  asignarDatosToken(){
    this._user = new Usuario();
    this._user = this.decodificarToken();
    //console.log("Usuario en Servicio", this._user);
  }

}