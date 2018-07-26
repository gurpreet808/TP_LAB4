import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuario-btn',
  templateUrl: './usuario-btn.component.html',
  styleUrls: ['./usuario-btn.component.css']
})
export class UsuarioBtnComponent implements OnInit {
    
  constructor(private servicioUsuario:UsuarioService) { }
  
  items: MenuItem[];
  
  ngOnInit() {
    this.items = [
      {label: 'Mi cuenta', icon: 'fa-address-card', command: () => {
        this.update();
      }},
      {label: 'Mis resultados', icon: 'fa-trophy', command: () => {
        this.update();
      }},
      {label: 'Desloguear', icon: 'fa-sign-out', command: () => {
        this.desloguear();
      }}
    ];
  }
  
  save() {
    
  }
  
  update() {
  }
  
  desloguear(){
    this.servicioUsuario.desloguearUsuario();
  }
}