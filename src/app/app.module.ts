import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';

const config = [
  {
    path:"tateti",
    component: TatetiComponent
  },
  {
    path:"anagrama",
    component: AnagramaComponent
  },
  {
    path:"piedrapapeltijera",
    component: PiedraPapelTijeraComponent
  },
  {
    path:"agilidad",
    component: AgilidadAritmeticaComponent
  },
  {
    path:"adivina",
    component: AdivinaElNumeroComponent
  },
  {
    path:"",
    component: InicioComponent
  },
  {
    path:"**",
    component: Error404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TatetiComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    AgilidadAritmeticaComponent,
    AdivinaElNumeroComponent,
    InicioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
