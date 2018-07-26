import { Component, OnInit } from '@angular/core';
import { JugadaService } from '../../servicios/jugada.service';
import { Jugada } from '../../clases/jugada';
import { SortEvent } from '../../../../node_modules/primeng/api';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  cols: any[];

  constructor(public servicioListado: JugadaService) { 
    this.servicioListado.traerJugadas()
    .subscribe(
      (respBody: Jugada[]) => {
        console.log(respBody);
        this.servicioListado.jugadas = respBody;
      }
    );

    this.cols = [
      { field: 'id_jugador', header: 'Jugador' },
      { field: 'nombre_juego', header: 'Juego' },
      { field: 'gano', header: 'Ganó' },
      { field: 'fecha', header: 'Fecha' }
    ];
  }

  ngOnInit() {
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}

}
