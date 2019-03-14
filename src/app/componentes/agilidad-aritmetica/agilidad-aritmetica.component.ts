import { Component, OnInit } from '@angular/core';
import { Agilidad } from '../../clases/agilidad';
import { JugadaService } from 'src/app/servicios/jugada.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  nuevoJuego: Agilidad;
  ocultarJuego: boolean;
  ocultarComenzar: boolean;
  ocultarMsj: boolean;
  disableVerif: boolean = false;
  temporizador: number;
  repetidor: any;
  //segundos para repsonder
  tiempo: number = 15;
  
  constructor(public servicioJugada:JugadaService, public servicioUsuario:UsuarioService, public snackBar: MatSnackBar){
    this.nuevoJuego = new Agilidad();
    this.ocultarComenzar = false;
    this.ocultarJuego = true;
    this.ocultarMsj = true;
    this.temporizador = this.tiempo;
  }
  
  ngOnInit(){}
  
  NuevoJuego(){
    this.nuevoJuego = new Agilidad();
    console.log(this.nuevoJuego.resultado);
    //this.nuevoJuego.resultadoUsuario = "";
    this.temporizador = this.tiempo;
    this.ocultarComenzar = true;
    this.ocultarJuego = false;
    this.ocultarMsj = true;
    this.disableVerif = false;

    this.repetidor = setInterval(()=>{
      this.temporizador--;
      if(this.temporizador == 0 ) {
        clearInterval(this.repetidor);
        this.Verificar();
      }
    }, 900);
  }

  Verificar(){
    this.disableVerif = true;
    if(this.nuevoJuego.verificar()) {
      this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "1");
      this.snackBar.open("WOW! Qué reflejos!", "OK");
    } else{
      this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "0");
      this.snackBar.open("Estás seguro que aprobaste Primaria?", "OK");
    }
    this.ocultarComenzar = false;
    this.ocultarMsj = false;
    clearInterval(this.repetidor);
  }
  
}