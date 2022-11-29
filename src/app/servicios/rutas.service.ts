import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RutasI } from '../interfaces/rutas';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(
    private http: HttpClient
  ) { }

  URL: string = 'https://api.openrouteservice.org/v2/directions/driving-car';

  getRutas(start: string, end: string): any {
    const params = new HttpParams()
      .set('api_key', "5b3ce3597851110001cf6248cce855ca26654dd99b8c61058cf3e20b")
      .set('start', start)
      .set('end', end);
    return this.http.get<RutasI>(this.URL, {params});
  }
}
