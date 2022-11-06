import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  URL:string = 'http://127.0.0.1:5000';

  loginIn(user):any{
    return this.http.post<any>(this.URL+'/login',user);
  }

  registerUser(user):any{
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
