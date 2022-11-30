import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ParkI, ParqueaderoI } from 'src/app/interfaces/parqueadero';
import { ParqueaderoService } from 'src/app/servicios/parqueadero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-parqueadero',
  templateUrl: './editar-parqueadero.component.html',
  styleUrls: ['./editar-parqueadero.component.css']
})
export class EditarParqueaderoComponent implements OnInit {

  regPark : FormGroup;
  lat: number;
  
  helper = new JwtHelperService();
  decode_token = this.helper.decodeToken(localStorage.getItem('token'));

  id_user:number = this.decode_token.public_id;
  datosPar:ParkI = {
    idParquedero:0,
    idUsuarioPar:this.id_user,
    direccion:'',
    longitud:0,
    latitud:0,
    precio:0,
    horaApertura:'',
    horaCierre:'',
    puestos:0
  };
  
  constructor(
    private parqueaderoService: ParqueaderoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  
  createForm(): void {
    this.regPark = new FormGroup({
      idUsuarioPar : new FormControl(this.id_user),
      direccion: new FormControl('', Validators.required),
      longitud: new FormControl(this.datosPar.longitud, Validators.required),
      latitud : new FormControl(this.datosPar.latitud, [Validators.required]),
      precio: new FormControl('', Validators.required),
      horaApertura: new FormControl('', Validators.required),
      horaCierre: new FormControl('', Validators.required),
      puestos : new FormControl('', Validators.required)
    });

  }

  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.parqueaderoService.getParqueaderoByIdPar(parseInt(paramMap.get('id')))
      .subscribe(res => {
        this.datosPar = res;
        console.log(this.datosPar);
        //this.longitud = this.datosPar.longitud;
        //this.latitude = this.datosPar.latitud;
      });
    });

    this.createForm();
  }

  onSubmit(par:ParqueaderoI): void {
    console.log(par,'>>>>>>>>', this.datosPar.idParquedero);
    this.parqueaderoService.updatePar(this.datosPar.idParquedero,par)
    .subscribe(res=>{
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
      this.router.navigate(['/gestionar-parqueaderos']);
    },
    err=>console.log(err))
    
  }
  recibirLat(data:any): void {
    this.datosPar.latitud = data.lat;
    this.datosPar.longitud = data.lng;
    
    //console.log(">>>>>"+this.latitude);
  }

  
}
