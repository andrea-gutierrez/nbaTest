import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = 'https://mach-eight.uc.r.appspot.com';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(
    private http: HttpClient
  ) { }

  getJugadores() {
    return this.http.get(`${base_url}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
      .pipe(
        map((resp: any) => {
          return resp;
        }),
        catchError(err => {
          throw err;
        })
      );
  }
}
