import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ParqueaderoI, ParResI, RespParI } from '../interfaces/parqueadero';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {
  parqueaderos:RespParI[] =[]
  constructor(
    private http: HttpClient
  ) { }

  URL:string = 'http://127.0.0.1:5000';

  getParqueaderos():any{
    return this.http.get<RespParI>(this.URL+'/parqueaderos');
  }
  
  saveParqueaderos(parqueadero:ParqueaderoI):any{
    return this.http.post<ParResI>(this.URL+'/parqueaderos',parqueadero);
  }


}
