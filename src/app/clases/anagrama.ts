import { Juego } from '../clases/juego'

export class Anagarama extends Juego {
    respuestaIngresada : string;
    respuesta : string;
    palabraOrdenada="";
    palabraDesordenada="";
    palabraIngresada="";

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super(" Anagrama ",gano,jugador);
    }

    arrayDePalabras : Array <any >= [
        { ordenada:"amor",desordenada:"roma" },
        { ordenada:"roma",desordenada:"amor" },
        { ordenada:"base",desordenada:"sabe" },
        { ordenada:"clase",desordenada:"alces" },
        { ordenada:"libro",desordenada:"briol" },
        { ordenada:"panel",desordenada:"penal" },
        { ordenada:"agujar",desordenada:"jaguar" },
        { ordenada:"lapicera",desordenada:"paralice" },
        { ordenada:"asignatura",desordenada:"angustiara" },
        { ordenada:"datos",desordenada:"todas" }

    ];

    public asignarPalabra() {       
        let indice;
        indice =Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada=this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada=this.arrayDePalabras[indice]["ordenada"];
    }

    public verificar() {
        if (this.palabraIngresada.toLowerCase() == this.palabraOrdenada ) 
        {
          this.gano = true;
          this.palabraOrdenada="";
          this.palabraDesordenada="";
          this.palabraIngresada=""; 
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }
}
