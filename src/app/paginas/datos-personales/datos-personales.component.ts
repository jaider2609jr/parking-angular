import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ParametrosI } from 'src/app/interfaces/parametro';
import { UserPostI, UsuarioI } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { ParametrosService } from 'src/app/servicios/parametros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  helper = new JwtHelperService();
  decode_token = this.helper.decodeToken(localStorage.getItem('token'));

  id_user:number = this.decode_token.public_id;
  editUser: FormGroup;
  tipoid:ParametrosI[]=[];
  datosPersonales:UserPostI ={
    correo:     '',
    numeroId:   '',
    pApellido:  '',
    pNombre:    '',
    password:   '',
    sApellido:  '',
    sNombre:    '',
    username:   ''   
  };
  constructor(
    private parametros:ParametrosService,
    private authService:AuthService,
    private router:Router
    ) { }

  createForm(): void {
    this.editUser = new FormGroup({
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
    this.cargarDatos();
  }

  cargarDatos(): void{
    this.authService.misDatos(this.id_user)
    .subscribe(res => {
      this.datosPersonales =res;
    },
    err => console.log(err));

    this.parametros.getTid()
    .subscribe( res => {
      console.log(res)
      this.tipoid = res;
    },
    err => console.log(err)
    );
  }

  onSubmit(form:UsuarioI): void {
    console.log(form);
    this.authService.actualizarDatos(this.id_user,form)
    .subscribe( res => {
      console.log(res);
      Swal.fire({
        position: 'center',
        iconHtml: '<img src="../../../assets/img/par-coches.png" style="width: 10rem;">',
        customClass:{
          icon: 'border-0'
        },
        title: `${res.message}`,
        showConfirmButton: false,
        timer: 2500
      });
      window.location.reload();
      //this.router.navigate(['/mis-datos']);
    },
    err => console.log(err))
  }

}
