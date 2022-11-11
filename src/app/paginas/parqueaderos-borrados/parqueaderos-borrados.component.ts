import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RespParI } from 'src/app/interfaces/parqueadero';
import { ParqueaderoService } from 'src/app/servicios/parqueadero.service';

@Component({
  selector: 'app-parqueaderos-borrados',
  templateUrl: './parqueaderos-borrados.component.html',
  styleUrls: ['./parqueaderos-borrados.component.css']
})
export class ParqueaderosBorradosComponent implements OnInit {

  helper = new JwtHelperService();
  decode_token = this.helper.decodeToken(localStorage.getItem('token'));
  id_user:number = this.decode_token.public_id;

  misParBorrados:RespParI[]=[];

  constructor(
    private http: HttpClient,
    private parqueaderoService: ParqueaderoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loadParBorrados();
  }

  loadParBorrados(): void {
    this.parqueaderoService.getParInactivos(this.id_user)
    .subscribe(res => {
      this.misParBorrados = res;
    },
    err => console.log(err));
  }

  recuperarPar(id:number): void {
    this.parqueaderoService.recuperarPar(id)
    .subscribe(res => {
      console.log(res);
      this.loadParBorrados();
    },
    err => console.log(err));

  }


}
