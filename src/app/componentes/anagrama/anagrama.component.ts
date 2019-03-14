import { Component, OnInit } from '@angular/core';
import { JugadaService } from '../../servicios/jugada.service';
import { Anagarama } from '../../clases/anagrama';
import { MatSnackBar } from '@angular/material';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  
  nuevoJuego: Anagarama;
  Mensajes: string;
  temporizador: number;
  ocultarVerificar: boolean;
  ocultarComenzar: boolean;
  ocultarMsj: boolean = true;
  repetidor: any;
  //segundos para repsonder
  tiempo: number = 15;
  
  
  constructor(public snackBar: MatSnackBar, public servicioJugada:JugadaService, public servicioUsuario:UsuarioService) {
    this.nuevoJuego = new Anagarama(); 
    this.ocultarVerificar = true;
    this.ocultarComenzar = false;
    this.temporizador = this.tiempo;
  }
  
  generarPalabra() {
    this.nuevoJuego.asignarPalabra();
    //this.ocultarVerificar = false;
    this.nuevoJuego.gano = false;
    this.ocultarMsj = true;
    this.ocultarComenzar = true;
    this.ocultarVerificar = false;
    //console.log(this.nuevoJuego.palabraOrdenada);
    this.repetidor = setInterval(()=>{ 
      
      this.temporizador--;
      //console.log("llego", this.temporizador);
      if(this.temporizador == 0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        //this.ocultarComenzar=false;
        //this.ocultarVerificar=true;
        this.temporizador = this.tiempo;
      }
    }, 900);
  }
  
  verificar() {
    this.ocultarVerificar = true;
    
    if (this.nuevoJuego.verificar()){
      this.snackBar.open("FELICITACIONES!!!", "OK");
      this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "1");
    } else {
      this.servicioJugada.registrarJugada(this.nuevoJuego.nombre, this.servicioUsuario._user.email, "0");
      this.snackBar.open("Ooops, casi lo lograste!", "OK"); 
    }
    console.info("Gano: ",this.nuevoJuego.gano);  
    this.ocultarComenzar = false;
    
    this.ocultarMsj = false;
    clearInterval(this.repetidor);
    this.temporizador = this.tiempo; 
    //this.mihttp.Archivar(this.data).subscribe(data=>console.log(data));
  }
  
  ngOnInit() {
  }
  
}