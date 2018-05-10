import { Component, OnInit } from '@angular/core';
import { PiedraPapelTijera } from "../../clases/piedra-papel-tijera";

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego:PiedraPapelTijera;
  mensajes:string;
  nuevaPartida:boolean;

  constructor() { 
    this.nuevoJuego = new PiedraPapelTijera();
  }

  empezar(){  
    this.nuevoJuego.nuevoJuego();
  }

  jugar(elemento){
    this.nuevoJuego.elementoIngresado = elemento;
    this.empezar();
    
    switch (this.nuevoJuego.jugar()) {
      case "gano":
        this.mensajes = "Ganaste!"
        break;
      case "perdio":
        this.mensajes = "Perdiste"
        break;
      case "empate":
        this.mensajes = "Empataste"
        break;
    
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
