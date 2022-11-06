import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/servicios/auth.service';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  registerUser: FormGroup;
  tipoid:any[]=[];
  constructor(
    private parametros:ParametrosService,
    private authService:AuthService
    ) { }

  createForm(): void {
    this.registerUser = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pNombre: new FormControl('', Validators.required),
      sNombre: new FormControl(''),
      pApellido: new FormControl('', Validators.required),
      sApellido: new FormControl('', Validators.required),
      correo : new FormControl('', [Validators.required, Validators.email]),
      tipoId : new FormControl('', Validators.required),
      numeroId : new FormControl('', [Validators.required, Validators.min(99999)]),
    });

  }

  ngOnInit(): void {
    this.createForm();
    this.parametros.getTid()
    .subscribe( res => {
      console.log(res)
      this.tipoid = res;
    },
    err => console.log(err)
    )
  }

  onSubmit(form:any): void {
    console.log(form);
    this.authService.registerUser(form)
    .subscribe( res => {
      console.log(res)
    },
    err => console.log(err))
  }

 
  
  

}
