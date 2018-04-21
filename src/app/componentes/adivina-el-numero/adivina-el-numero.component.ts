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
  contador:number = 0;
  ocultarVerificar:boolean;
  
  constructor() { 
    this.nuevoJuego = new Adivina();
    this.ocultarVerificar=false;
  }
  
  generarNumero() {
    this.nuevoJuego.generarNumero();
    this.contador=0;
  }
  
  verificar() {
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano);

    if (this.nuevoJuego.verificar()) {
      this.MostarMensaje("Sos un Genio!!! Lo adivinaste.",true);
      this.nuevoJuego.numeroSecreto=0;

    } else {

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, le pifiaste, animo.";
        break;

        case 2:
          mensaje="No, Te estarás Acercando???";
        break;
        
        case 3:
          mensaje="No es. Yo crei que la tercera era la vencida.";
        break;
        
        case 4:
          mensaje="No era el "+this.nuevoJuego.numeroIngresado+".";
        break;
        
        case 5:
          mensaje=" intentos y nada.";
        break;
        
        case 6:
          mensaje="Afortunado en el amor.";
        break;
        
        default:
          mensaje="Ya le erraste "+ this.contador+" veces.";
        break;
      }

      this.MostarMensaje("#"+this.contador+" "+mensaje+" Ayuda: "+this.nuevoJuego.retornarAyuda());
    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  
  
  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
    {
      x.className = "show Ganador";
    }else{
      x.className = "show Perdedor";
    }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
    }, 3000);
    console.info("objeto",x);  
  }
  
  ngOnInit() {
  } 
}