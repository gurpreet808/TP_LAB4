import { Component, OnInit } from '@angular/core';
import { PiedraPapelTijera } from "../../clases/piedra-papel-tijera";
import { MatSnackBar } from '@angular/material';
import { JugadaService } from 'src/app/servicios/jugada.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego: PiedraPapelTijera;
  mensajes: string;
  nuevaPartida: boolean;

  constructor(public snackBar: MatSnackBar, public servicioJugada:JugadaService, public servicioUsuario:UsuarioService) { 
    this.nuevoJuego = new PiedraPapelTijera();
    this.empezar();
  }

  empezar(){  
    this.nuevoJuego.nuevoJuego();
    this.nuevaPartida = true;
  }

  jugar(elemento){
    this.nuevoJuego.elementoIngresado = elemento;
    this.nuevaPartida = false;
    this.nuevoJuego.verificar();
    //this.empezar();
    
    switch (this.nuevoJuego.jugar()) {
      case "gano":
        this.mensajes = "Ganaste! :)"
        this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "1");
        this.snackBar.open("FELICITACIONES!!!", "OK");
        break;
      case "perdio":
        this.mensajes = "Perdiste :("
        this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "0");
        this.snackBar.open("Uhhh. La proxima será", "OK");
        break;
      case "empate":
        this.mensajes = "Empataste :S"
        this.snackBar.open("Hey! hay más opciones..", "OK");
        break;
    
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
