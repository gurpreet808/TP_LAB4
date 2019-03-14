import { Injectable } from '@angular/core';
import { Jugada } from '../clases/jugada';
import { MiHttpService } from './mi-http.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class JugadaService {
  
  public _jugada: Jugada;

  constructor(public _http: MiHttpService, public snackBar: MatSnackBar) {
  }

  registrarJugada(juego: string, jugador: string, resultado: string){
    let datos = {
      id_jugador: jugador, 
      nombre_juego: juego,
      gano: resultado
    };

    this._http.POST("/jugada/", datos).subscribe(
      data =>{
        console.log(data);
      },
      err => {
        console.log(err);
      }
     );
  }
    
  traerJugadas(){
    return this._http.GET("/jugada/");
  }

  borrarJugada(id: string){
  }

}