import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';

import { MiHttpService } from "./servicios/mi-http.service";
import { UsuarioService } from "./servicios/usuario.service";

//#region Mis componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { UsuarioBtnComponent } from './componentes/usuario-btn/usuario-btn.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { AuthGuard } from './servicios/auth.guard';

//#endregion

const appRoutes = [
  { path:"", component: InicioComponent },
  { path:"login", component: IniciarSesionComponent },
  { path:"registrarme", component: RegistrarUsuarioComponent },
  { path:"tateti", component: TatetiComponent, canActivate: [AuthGuard]},
  { path:"anagrama", component: AnagramaComponent, canActivate: [AuthGuard]},
  { path:"piedrapapeltijera", component: PiedraPapelTijeraComponent, canActivate: [AuthGuard]},
  { path:"agilidad", component: AgilidadAritmeticaComponent, canActivate: [AuthGuard]},
  { path:"adivina", component: AdivinaElNumeroComponent, canActivate: [AuthGuard]},
  { path:"**", component: Error404Component }
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
    Error404Component,
    UsuarioBtnComponent,
    RegistrarUsuarioComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    PanelModule,
    InputTextModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MiHttpService,
    UsuarioService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
