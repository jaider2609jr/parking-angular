import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ParqueaderoI } from 'src/app/interfaces/parqueadero';
import { ParqueaderoService } from 'src/app/servicios/parqueadero.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-registro-parqueadero',
  templateUrl: './registro-parqueadero.component.html',
  styleUrls: ['./registro-parqueadero.component.css']
})
export class RegistroParqueaderoComponent implements OnInit {
  regPark : FormGroup;
  latitude :number=0;
  longitud: number=0;
  lat: number;
  helper = new JwtHelperService();
  decode_token = this.helper.decodeToken(localStorage.getItem('token'));

  id_user:number = this.decode_token.public_id;
  
  
  constructor(
    private parqueaderoService: ParqueaderoService,
    private router: Router
  ) { }
  
  
  createForm(): void {
    
    this.regPark = new FormGroup({
      idUsuarioPar : new FormControl(this.id_user),
      direccion: new FormControl('', Validators.required),
      longitud: new FormControl(this.longitud, Validators.required),
      latitud : new FormControl(this.latitude, [Validators.required]),
      precio: new FormControl('', Validators.required),
      horaApertura: new FormControl('', Validators.required),
      horaCierre: new FormControl('', Validators.required),
      puestos : new FormControl('', Validators.required)
    });

  }

  

  ngOnInit(): void {
    console.log('user id: ',this.id_user);
    this.createForm();
  }

  onSubmit(par:ParqueaderoI): void {
    console.log(par);
    this.parqueaderoService.saveParqueaderos(par)
    .subscribe(res=>{
      console.log(res.message);
      this.router.navigate(['/mapa']);
    },
    err=>console.log(err));
    
  }
  recibirLat(data:any): void {
    this.latitude = data.lat;
    this.longitud = data.lng;
    
    //console.log(">>>>>"+this.latitude);
  }

}
