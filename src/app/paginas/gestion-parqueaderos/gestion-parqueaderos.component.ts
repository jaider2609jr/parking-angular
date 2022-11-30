import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ParqueaderoService } from 'src/app/servicios/parqueadero.service';
import { RespParI } from 'src/app/interfaces/parqueadero';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-parqueaderos',
  templateUrl: './gestion-parqueaderos.component.html',
  styleUrls: ['./gestion-parqueaderos.component.css']
})
export class GestionParqueaderosComponent implements OnInit {

  helper = new JwtHelperService();
  decode_token = this.helper.decodeToken(localStorage.getItem('token'));
  id_user:number = this.decode_token.public_id;

  misPar:RespParI[]=[];

  constructor(
    private http: HttpClient,
    private parqueaderoService: ParqueaderoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.misParqueaderos();
  }

  misParqueaderos(): void{
    this.parqueaderoService.getParqueaderosById(this.id_user)
    .subscribe(res =>{
      console.log(res);
      this.misPar = res;
    },
    err => console.log(err)
    );
  }

  deletePar(id:number): void{
    console.log(id);
    this.parqueaderoService.deleteParqueadero(id)
    .subscribe(res =>{
      console.log(res.message);
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
      this.misParqueaderos();
    },
    err => console.log(err));
  }
}
