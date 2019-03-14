import { Juego } from './juego'

export class Adivina extends  Juego {
    numeroSecreto: number = 0;
    numeroIngresado:number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Adivina el número",gano,jugador);       
    }

    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }

    public generarNumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    
    public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Te falta";
        }
        return "Te pasaste";
    }
}