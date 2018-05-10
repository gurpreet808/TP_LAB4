import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {

  constructor(public http: Http) { }

  public httpGet (url: string): Observable<Response> {
    return this.http.get(url)
      .map( (res: Response) => res.json())
      .catch( (err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  private extractData (res: Response) {
    return res.json() || {};
  }

  private handleError (error: Response | any) {
    return error;
  }

}
