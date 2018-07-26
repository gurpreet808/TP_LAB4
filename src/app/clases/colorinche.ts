import { Juego } from "./juego";

export class Colorinche extends Juego{
    colorFondo: number = -1;
    colorTexto: number;
    respuesta: boolean;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Colorinche",gano,jugador);       
    }

    public verificar() {
        if (this.colorTexto == this.colorFondo) {
            if (this.respuesta) {
                this.gano = true;
            }
        } else {
            if (!this.respuesta) {
                this.gano = true;
            }
        }

        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }

    public generarColores() {
        this.colorFondo = Math.floor((Math.random() * 5) + 1);
        this.colorTexto = Math.floor((Math.random() * 5) + 1);
        console.info('color fondo:' + this.colorFondo);
        console.info('color texto:' + this.colorTexto);
        this.gano = false;
    }
}