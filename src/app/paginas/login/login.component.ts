import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginI } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  user_id: number=0;
  message: string='';
  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  createForm(): void {
    this.loginUser = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }


  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(form:LoginI): void {
    console.log('username: ' + form.username);
    console.log('password: ' + form.password);
    this.authService.loginIn(form)
    .subscribe(res=>{
      console.log(res.status)
      if (res.status=='not_found') {
        this.message=res.message;
        console.log(this.message);
      }else if (res.status=='error_password') {
        this.message=res.message;
        console.log(this.message);
      }else if (res.status=='ok'){
        localStorage.setItem('token',res.token);
        this.user_id = res.user_id
        this.message = res.message;
        Swal.fire({
          position: 'center',
          iconHtml: '<img src="../../../assets/img/par-coches.png" style="width: 10rem;">',
          customClass:{
            icon: 'border-0'
          },
          title: `${this.message}`,
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigate(['/home'])
      }
    },
    err => console.log(err))
  }
  

}
