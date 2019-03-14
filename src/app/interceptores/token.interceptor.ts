import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public servUsuario: UsuarioService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    //si hay token
    if (this.servUsuario.logueado.value) {
      request = request.clone({
        setHeaders: {
          token: this.servUsuario.token
        }
      });
    }

    return next.handle(request);
  }
}
