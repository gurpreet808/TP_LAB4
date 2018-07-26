import { Component } from '@angular/core';
import { Usuario } from "./clases/usuario";
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor( private servicioUsuario:UsuarioService ) {
    
  }
}
