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

  getParqueaderosById(id:number):any{
    return this.http.get<RespParI>(this.URL+'/parqueaderos/activos/'+id);
  }
  
  saveParqueaderos(parqueadero:ParqueaderoI):any{
    return this.http.post<ParResI>(this.URL+'/parqueaderos',parqueadero);
  }

  deleteParqueadero(id:number):any{
    return this.http.put<ParResI>(this.URL+'/parqueaderos/eliminar/'+id,'');
  }

  getParInactivos(id:number):any{
    return this.http.get<RespParI>(this.URL+'/parqueaderos/inactivos/'+id);
  }

  recuperarPar(id:number):any{
    return this.http.put<ParResI>(this.URL+'/parqueaderos/recuperar/'+id,'');
  }

}
