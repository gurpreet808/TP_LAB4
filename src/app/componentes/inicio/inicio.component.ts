import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router, private servicioUsuario: UsuarioService) { }

  ngOnInit() {
  }

  navegar(url: string) {
    this.router.navigateByUrl("/"+url);
  }
}
