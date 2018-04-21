import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-usuario-btn',
  templateUrl: './usuario-btn.component.html',
  styleUrls: ['./usuario-btn.component.css']
})
export class UsuarioBtnComponent implements OnInit {
  
  constructor() { }
  
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
        this.delete();
      }}
    ];
  }
  
  save() {
    
  }
  
  update() {
  }
  
  delete() {
  }
}