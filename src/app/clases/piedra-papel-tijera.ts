import { Juego } from '../clases/juego'

export class PiedraPapelTijera extends Juego {
    elementoSecreto: number = -1;
    elementoIngresado: number;
    elementos: string[] = ["piedra", "papel", "tijera"];

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra, Papel o Tijera",gano,jugador);       
    }

    public verificar() {
        if (this.elementoIngresado == 0) {
            if (this.elementoSecreto == 2) {
                this.gano = true;
            } else {
                this.gano = false;
            }
        }

        if (this.elementoIngresado == 1) {
            if (this.elementoSecreto == 0) {
                this.gano = true;
            } else {
                this.gano = false;
            }
        }

        if (this.elementoIngresado == 2) {
            if (this.elementoSecreto == 1) {
                this.gano = true;
            } else {
                this.gano = false;
            }
        }

        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }

    public nuevoJuego() {
        this.elementoSecreto = Math.floor(Math.random() * 3);
        console.info('Elemento secreto:' + this.elementoSecreto);
        this.gano = false;
    }

    public jugar(){
        if(this.elementoIngresado == this.elementoSecreto){
            return "empate";
        } else {
            if(this.verificar()){
                return "gano"
            } else {
                return "perdio"
            }
        }
    }
}