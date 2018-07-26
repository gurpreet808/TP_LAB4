import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MiHttpService {

  constructor(public _miHttp:HttpClient) { }

  urlServidor = 'http://localhost/apiTP';
  
  GET(path: string): Observable<any>{
    return this._miHttp.get(this.urlServidor+path);
  }

  POST (path: string, objParam: any): Observable<any> {
    return this._miHttp.post<any>(this.urlServidor+path, objParam, httpOptions);
  }

  HeadersPOST (path: string, objParam: any): Observable<any> {
    return this._miHttp.post<any>(this.urlServidor+path, objParam, {observe: "response"});
  }
}