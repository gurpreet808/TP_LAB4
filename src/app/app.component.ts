import { Component } from '@angular/core';
import { Usuario } from "./clases/usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //elUsuario:Usuario;
  elUsuario:Usuario = new Usuario("Diego", "Lopez", "H", "dl2018", "diego@diego.com", "diego");

  mostrar(){
    this.elUsuario = new Usuario("Diego", "Lopez", "H", "dl2018", "diego@diego.com", "diego");
  }
}
