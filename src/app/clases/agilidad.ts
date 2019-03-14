import{ Juego } from "./juego";

export class Agilidad extends Juego{
    numero1: number;
    numero2: number;
    operador: string;
    resultado: number;
    calculo: string;
    resultadoUsuario: number;
    
    constructor(nombre?: string, gano?: boolean,jugador?:string) {
        super("Agilidad aritmetica",gano,jugador);
        this.calculo = this.GenerarCalculo();
        this.resultadoUsuario = null;
    }
    
    GenerarCalculo() {
        this.numero1 = Math.round(Math.random()*10);
        this.numero2 = Math.round(Math.random()*10);
        let numOp = Math.round(Math.random()*3);
        
        switch(numOp) {
            case 0:
                this.operador= "+";
            break;
            
            case 1:
                this.operador= "-";
            break;
            
            case 2:
                this.operador= "*";
            break;
            
            case 3:
                this.operador= "/";
                if(this.numero1 < this.numero2 || this.numero2 == 0){
                    this.GenerarCalculo();
                }
            break;
        }
        this.ObtenerResultado();
        
        return this.numero1 +" "+ this.operador + " " +this.numero2;
    }
    
    verificar(): boolean {
        if(this.resultado == this.resultadoUsuario){
            this.gano = true;
            return true;
        }
        return false;
    }
    
    ObtenerResultado(){
        switch(this.operador){
            case "+": 
                this.resultado = this.numero1 + this.numero2;
                break;

            case "-": 
                this.resultado = this.numero1 - this.numero2;
                break;
            
            case "*": 
                this.resultado = this.numero1 * this.numero2;
                break;

            case "/": 
                this.resultado = +(this.numero1 / this.numero2).toFixed(2);
                break;
        }
    }
}