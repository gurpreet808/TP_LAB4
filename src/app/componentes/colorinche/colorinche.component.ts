import { Component, OnInit } from '@angular/core';
import { Colorinche } from '../../clases/colorinche';
import { MatSnackBar } from '@angular/material';
import { JugadaService } from 'src/app/servicios/jugada.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-colorinche',
  templateUrl: './colorinche.component.html',
  styleUrls: ['./colorinche.component.css']
})
export class ColorincheComponent implements OnInit {
  
  nuevoJuego: Colorinche;
  mensajes: string;
  texto: string;
  fondo: string;
  habilitarEleccion: boolean = false;
  ocultarComenzar: boolean = false;
  ocultarJuego: boolean = true;
  repetidor: any;
  temporizador: number;
  //segundos para repsonder
  tiempo: number = 15;
  
  constructor(public servicioJugada:JugadaService, public servicioUsuario:UsuarioService, public snackBar: MatSnackBar) { 
    this.nuevoJuego = new Colorinche();
    this.temporizador = this.tiempo;
  }
  
  
  generarColores() {
    this.nuevoJuego.generarColores();
    this.ocultarJuego = false;
    this.ocultarComenzar = true;
    this.ocultarComenzar = false;
    this.temporizador = this.tiempo;

    this.fondo = ColoresFondo[this.nuevoJuego.colorFondo];
    this.texto = ColoresTexto[this.nuevoJuego.colorTexto];

    this.habilitarEleccion = true;
    this.mensajes = null;

    this.repetidor = setInterval(()=>{
      this.temporizador--;
      if(this.temporizador == 0 ) {
        clearInterval(this.repetidor);
        this.verificar(this.check());        
      }
    }, 900);
  }


  check(){
    if (this.nuevoJuego.colorTexto == this.nuevoJuego.colorFondo){
      return false;
    } else {
      return true;
    }
  }

  verificar(rta: boolean) {
    this.nuevoJuego.respuesta = rta;
    clearInterval(this.repetidor);

    if (this.nuevoJuego.verificar()) {
      this.snackBar.open("Qué vista!!! Acertaste.", "OK");
      this.mensajes = "Ganaste!";
      this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "1");
    } else {
      this.snackBar.open("Uhhh, tal vez la próxima", "OK");
      this.mensajes = "Perdiste...";
      this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "0");
    }

    this.habilitarEleccion = false;
    this.ocultarComenzar = false;
  } 

  btn(opt: string){
    let btnStyle;

    if (this.habilitarEleccion) {
      switch (opt) {
        case "si":
          btnStyle = {"background-color":"green"};
        break;
  
        case "no":
          btnStyle = {"background-color":"red"};
        break;
      
        default:
          break;
      }
    }


    return btnStyle;
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