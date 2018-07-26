import { Injectable } from '@angular/core';
import { Jugada } from '../clases/jugada';
import { MiHttpService } from './mi-http.service';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class JugadaService {

  jugadas: Jugada[];
  elJugada: Jugada;

  constructor(public _http: MiHttpService) {
    //this.elJugada = new Jugada();
  }

  traerJugadas(): Observable<Jugada[]>{
    return this._http.GET("/jugada/");
  }

  registrarJugada(jugada){
    return this._http.POST("/jugada/", jugada);
  }
}