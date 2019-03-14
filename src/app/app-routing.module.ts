import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { Error404Component } from './componentes/error404/error404.component';
import { AuthGuard } from './guards/auth.guard';
import { AnonGuard } from './guards/anon.guard';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ColorincheComponent } from './componentes/colorinche/colorinche.component';
import { ListaResultadosComponent } from './componentes/lista-resultados/lista-resultados.component';

const routes: Routes = [
  { path:"", component: InicioComponent },
  { path:"login", component: LoginComponent, canActivate: [AnonGuard] },
  { path:"registrarme", component: RegistrarUsuarioComponent, canActivate: [AnonGuard] },
  //{ path:"tateti", component: TatetiComponent, canActivate: [AuthGuard]},
  { path:"anagrama", component: AnagramaComponent, canActivate: [AuthGuard]},
  { path:"piedrapapeltijera", component: PiedraPapelTijeraComponent, canActivate: [AuthGuard]},
  { path:"agilidad", component: AgilidadAritmeticaComponent, canActivate: [AuthGuard]},
  { path:"adivina", component: AdivinaElNumeroComponent, canActivate: [AuthGuard]},
  { path:"colorinche", component: ColorincheComponent, canActivate: [AuthGuard]},
  { path:"resultados", component: ListaResultadosComponent, canActivate: [AuthGuard]},
  { path:"**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
