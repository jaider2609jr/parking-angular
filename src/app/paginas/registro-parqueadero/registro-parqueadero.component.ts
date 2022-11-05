import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro-parqueadero',
  templateUrl: './registro-parqueadero.component.html',
  styleUrls: ['./registro-parqueadero.component.css']
})
export class RegistroParqueaderoComponent implements OnInit {
  regPark : FormGroup;
  latitude :number=1;
  longitud: number=1;
  
  constructor() { }
  

  
  createForm(): void {
    
    this.regPark = new FormGroup({
      direccion: new FormControl('', Validators.required),
      longitud: new FormControl(this.longitud, Validators.required),
      latitud : new FormControl(this.latitude, [Validators.required]),
      precio: new FormControl('', Validators.required),
      horaA: new FormControl('', Validators.required),
      horaC: new FormControl('', Validators.required),
      puestos : new FormControl('', Validators.required)
    });

  }

  

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(form:any): void {
    console.log(form);
    
  }
  recibirLat(data:any): void {
    this.latitude = data.lat;
    this.longitud = data.lng;
    console.log(">>>>>"+this.latitude);
  }

}
