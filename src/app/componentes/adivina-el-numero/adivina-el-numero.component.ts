import { Component, OnInit} from '@angular/core';
import { Adivina } from '../../clases/adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})

export class AdivinaElNumeroComponent implements OnInit {  
  nuevoJuego:Adivina;
  mensajes:string;
  contador:number = -1;
  nuevaPartida:boolean = true;
  ayudas:string;
  
  constructor() { 
    this.nuevoJuego = new Adivina();
  }
  
  generarNumero() {
    this.nuevoJuego.generarNumero();
    this.nuevoJuego.numeroIngresado = 0;
    this.contador = 0;
    this.nuevaPartida = false;
  }
  
  verificar() {
    this.contador++;

    if (this.nuevoJuego.verificar()) {
      this.mensajes = "Sos un Genio!!! Lo adivinaste."
      this.ayudas = "";
      //console.log("Sos un Genio!!! Lo adivinaste.");
      this.nuevaPartida = true;
    } else {

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, le erraste, ánimo.";
        break;

        case 2:
          mensaje="No, Te estarás Acercando???";
        break;
        
        case 3:
          mensaje="No es. Yo creía que la tercera era la vencida.";
        break;
        
        case 4:
          mensaje="No era el "+this.nuevoJuego.numeroIngresado+".";
        break;
        
        case 5:
          mensaje=" intentos y nada...";
        break;
        
        case 6:
          mensaje="Afortunado en el amor.";
        break;
        
        default:
          mensaje="Ya le erraste "+ this.contador+" veces.";
        break;
      }
      this.mensajes = "#"+this.contador+" "+mensaje;
      this.ayudas = "Ayuda: "+this.nuevoJuego.retornarAyuda();
      //console.log("#"+this.contador+" "+mensaje+" Ayuda: "+this.nuevoJuego.retornarAyuda());
    }
  } 
  
  ngOnInit() {
  } 
  
}