import { Component, OnInit, ViewChild } from '@angular/core';
import { JugadaService } from 'src/app/servicios/jugada.service';
import { Jugada } from 'src/app/clases/jugada';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styleUrls: ['./lista-resultados.component.css']
})
export class ListaResultadosComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  jugadas: Jugada[] = [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nombre_juego','id_jugador','gano','fecha'];

  constructor(public servJugada: JugadaService) { 
    this.servJugada.traerJugadas().subscribe(
      data => {
        //console.log(data);
        this.jugadas = data;
        console.log(this.jugadas);
        this.listData = new MatTableDataSource(data);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
