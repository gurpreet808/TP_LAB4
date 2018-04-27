import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router ) { }

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'fa-home', 
                command: e => {
                    this.router.navigateByUrl("/");
                }
            },
            {
                label: 'Juegos',
                icon: 'fa-gamepad',
                items: [
                    {label: 'Adivina', routerLink:"/adivina"},
                    {label: 'Agilidad', routerLink:"/agilidad"},
                    {label: 'Piedra, Papel o Tijera', routerLink:"/piedrapapeltijera"},
                    {label: 'Anagrama', routerLink:"/anagrama"},
                    {label: 'Mi juego'}
                ]
            },
            {
                label: 'Resultados',
                icon: 'fa-trophy',
                items: [
                    {label: 'Este juego'},
                    {label: 'Todos los juegos'}
                ]
            }
            /*,{
                label: 'Acerca de',
                icon: 'fa-info-circle',
                items: [
                    {label: 'Mi Github', icon: 'fa-github'},
                    {label: 'Quien soy', icon: 'fa-user'}
                ]
            }*/
        ];
    }

}
