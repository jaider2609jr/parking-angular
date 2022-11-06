import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http:HttpClient) { }

  URL:string = 'http://127.0.0.1:5000';

  getTid(): any {
    return this.http.get<any>(this.URL + '/dparametros/1');
  }
}
