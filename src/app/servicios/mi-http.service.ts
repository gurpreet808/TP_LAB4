import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(public _miHttp:HttpClient) {}

  //urlServidor = 'http://localhost/api2';
  urlServidor = "http://lab4.mygamesonline.org/apiTP";

  GET(path: string): Observable<any>{
    return this._miHttp.get(this.urlServidor+path);
  }

  POST(path: string, postData: any): Observable<any> {
    return this._miHttp.post<any>(this.urlServidor+path, postData);
  }
}