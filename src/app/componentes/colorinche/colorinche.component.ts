import { Component, OnInit } from '@angular/core';
import { Colorinche } from '../../clases/colorinche';

@Component({
  selector: 'app-colorinche',
  templateUrl: './colorinche.component.html',
  styleUrls: ['./colorinche.component.css']
})
export class ColorincheComponent implements OnInit {
  
  nuevoJuego:Colorinche;
  mensajes:string;
  eleccion:string;
  cantPartida:number = 0;
  texto: string;
  fondo: string;
  
  constructor() { 
    this.nuevoJuego = new Colorinche();
  }
  
  
  generarColores() {
    this.nuevoJuego.generarColores();

    this.fondo = ColoresFondo[this.nuevoJuego.colorFondo];
    this.texto = ColoresTexto[this.nuevoJuego.colorTexto];

    this.cantPartida++;
    this.eleccion = null;
    this.mensajes = null;
  }
  
  verificar(rta:boolean) {

    this.nuevoJuego.respuesta = rta;

    if (this.nuevoJuego.verificar()) {
      this.mensajes = "Qué vista!!! Acertaste."
    } else {
      this.mensajes = "MAL!"
    }

    this.eleccion = "Elegiste: ";

    if (this.nuevoJuego.respuesta) {
      this.eleccion = this.eleccion+"SI";
    } else {
      this.eleccion = this.eleccion+"NO";
    }
  } 

  ngOnInit() {
  } 
}

enum ColoresTexto {
  "Azul",
  "Rojo",
  "Amarillo",
  "Verde",
  "Naranja",
  "Violeta"
}

enum ColoresFondo {
  "blue",
  "red",
  "yellow",
  "green",
  "orange",
  "blueviolet"
}