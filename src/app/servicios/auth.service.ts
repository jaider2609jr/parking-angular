import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { LoginI, RespI, UserRespI, UsuarioI } from '../interfaces/usuario';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

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
    return !!localStorage.getItem('token') && this.tokenExpired()==false;
  }

  misDatos(id:number):any{
    return this.http.get<UserRespI>(this.URL+'/usuarios/'+id);
  }

  actualizarDatos(id:number,datos:UsuarioI):any{
    return this.http.put<any>(this.URL+'/usuarios/editar/'+id,datos);
  }

  logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  tokenExpired(){
    const expToken = this.helper.decodeToken(localStorage.getItem('token')).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expToken;
  }

  
}
