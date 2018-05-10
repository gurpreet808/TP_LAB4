import { Juego } from '../clases/juego'

export class Anagarama extends Juego {
    palabraSecreta: string = "";
    palabraIngresada: string;
    palabraMostrar: string;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagarama",gano,jugador);       
    }

    public verificar() {
        if (this.palabraIngresada == this.palabraSecreta) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }

    public desarmarPalabra(unaPalabra) {
        this.palabraSecreta = unaPalabra;
        console.info('Palabra secreta:' + this.palabraSecreta);
        this.gano = false;
        
        return 
    }
}