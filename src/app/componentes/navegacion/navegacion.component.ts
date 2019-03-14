import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    items = [];
    itemsL = [];
  
    constructor(private breakpointObserver: BreakpointObserver, public servUsr: UsuarioService) {
      this.checkSession();        
    }
  
    cargarLogueado(){
      //menu logueado
      this.items = [];

      this.items.push({etiqueta:"Inicio", url: ""});
      this.items.push(
        {
          etiqueta:"Juegos", 
          url: [
            {etiqueta:"Anagrama", url: "anagrama"},
            {etiqueta:"Piedra, papel o tijera", url: "piedrapapeltijera"},
            {etiqueta:"Agilidad Aritmética", url: "agilidad"},
            {etiqueta:"Adivina el número", url: "adivina"},
            //{etiqueta:"TaTeTi", url: "jj"},
            {etiqueta:"Colorinche", url: "colorinche"}
          ]
        }
      );
      this.items.push({etiqueta:"Resultados", url: "resultados"});
    }
  
    cargarAnon(){
      //menu anonimo
      this.items = [];

      this.items.push({etiqueta:"Iniciar sesión", url: "login"});
      this.items.push({etiqueta:"Registrarme", url: "registrarme"});
    }
  
    checkSession(){
      this.servUsr.logueado.subscribe(
        usrLogueado =>{
          if (usrLogueado) {
            //console.log("entra en TRUE");
            //this.logueado = true;
            this.cargarLogueado();
          } else {
            //console.log("entra en FALSE");
            //this.logueado = false;
            this.cargarAnon();
          }
        },
        err =>{
          console.log(err);
        }
      );
    }
  
    esSubMenu(item){
      return Array.isArray(item);    
    }
  
    cambiar(datos){
      if (datos) {
        console.log("Logueó!");
      }
    }
  
    salir(){
      this.servUsr.desloguearUsuario();
      this.servUsr.router.navigateByUrl("/");
    }

}
