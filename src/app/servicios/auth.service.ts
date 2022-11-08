import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { LoginI, RespI, UsuarioI } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  URL:string = 'http://127.0.0.1:5000';

  loginIn(user:LoginI):any{
    return this.http.post<RespI>(this.URL+'/login',user);
  }

  registerUser(user:UsuarioI):any{
    return this.http.post<any>(this.URL+'/usuarios',user);
  }

  loggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
