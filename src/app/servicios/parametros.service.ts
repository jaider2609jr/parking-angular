import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ParametrosI } from '../interfaces/parametro';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http:HttpClient) { }

  URL:string = 'http://127.0.0.1:5000';

  getTid(): any {
    return this.http.get<ParametrosI>(this.URL + '/dparametros/1');
  }
}
