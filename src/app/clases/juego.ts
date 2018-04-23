export abstract class Juego {
    public nombre = 'Sin Nombre';
    public jugador: string;
    public gano = false;
    
    constructor(nombre?: string, gano?: boolean,jugador?:string) {
        if (nombre)
        this.nombre = nombre;
        
        if (gano)
        this.gano = gano;
        
        if(jugador)
        this.jugador=jugador;
        else
        this.jugador= "Anónimo";
    } 
    
    public abstract verificar():boolean; 
    
    public retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}