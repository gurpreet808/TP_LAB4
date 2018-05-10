import { Component } from '@angular/core';
import { Usuario } from "./clases/usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  elUsuario:Usuario;
  //elUsuario:Usuario = new Usuario("Diego", "Lopez", "H", "dl2018", "diego@diego.com");
  logueado:boolean;

  mostrar(){
    this.elUsuario = new Usuario("Diego", "Lopez", "H", "dl2018", "diego@diego.com");
  }

  cargarUsuario(usuario){
    this.elUsuario = new Usuario();
    this.elUsuario.nombreUsuario = usuario.nombreUsuario;
    //this.elUsuario.clave = usuario.clave;
  }
}
