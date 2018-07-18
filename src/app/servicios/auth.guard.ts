import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './usuario.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private servicioUsuario:UsuarioService) { }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.servicioUsuario.logged) {
      return true;
    }
    this.router.navigateByUrl("/");
    return false;
  }
}
