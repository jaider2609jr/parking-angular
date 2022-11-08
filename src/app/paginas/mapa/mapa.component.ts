import { Component, OnInit } from '@angular/core';
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { ParqueaderoService } from 'src/app/servicios/parqueadero.service';
import { RespParI } from 'src/app/interfaces/parqueadero';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  parqueaderos: RespParI[] = [];
  private map: any;
  coordenada: any;
  latitud: number;
  longitud: number;
 
  mapPar: any = [
    {
      "created_at": "Sat, 05 Nov 2022 17:42:57 GMT",
      "direccion": "calle 53#45-10",
      "estado": 1,
      "horaApertura": "13:30:00",
      "horaCierre": "19:50:00",
      "idParquedero": 1,
      "idUsuarioPar": 1,
      "latitud": 10.987628,
      "longitud": -74.789738,
      "precio": 2000,
      "puestos": 2
    },
    {
      "created_at": "Mon, 07 Nov 2022 17:00:21 GMT",
      "direccion": "calle 11 #7d-12",
      "estado": 1,
      "horaApertura": "12:30:00",
      "horaCierre": "19:50:00",
      "idParquedero": 2,
      "idUsuarioPar": 1,
      "latitud": 10.980838409619334,
      "longitud": -74.7927761077881,
      "precio": 1000,
      "puestos": 2
    }
  ]

  constructor(
    private parqueaderoService: ParqueaderoService
  ) { }



  ngOnInit(): void {
    this.loadPar();
    this.initMap();
  }

  loadPar(): void {
    this.parqueaderoService.getParqueaderos().subscribe(res => {
      console.log('>>>>>', res);
      this.parqueaderos = res;
      
    },
      err => console.log(err)
    );
  }

  private initMap(): void {
    this.map = L.map("map").setView([10.98719, -74.78814], 15);

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    tiles.addTo(this.map);

    (L.Control as any).geocoder().addTo(this.map);



    //this.map.on('click', this.onMapClick);
    this.map.on('click', (e) => {
      this.latitud = e.latlng.lat;
      this.longitud = e.latlng.lng;
      console.log("Acabas de hacer clic en: \n latitud: " + this.latitud + "\n longitud: " + this.longitud);
    });
    
    console.log('map-->>',this.parqueaderos)
    //this.loadParToMap();
    /*for (const par of this.mapPar) {
      new L.Marker([par.latitud, par.longitud]).bindPopup('calle 53#45-10<br>precio:2000').openPopup().addTo(this.map);
    }*/
    //var markers = new L.Marker([10.987628, -74.789738]).bindPopup('calle 53#45-10<br>precio:2000').openPopup().addTo(this.map);

  }



  private onMapClick(click: any): void {
    this.coordenada = click.latlng;
    this.latitud = this.coordenada.lat; // lat  es una propiedad de latlng
    var longitud = this.coordenada.lng; // lng también es una propiedad de latlng
    console.log("Acabas de hacer clic en: \n latitud: " + this.latitud + "\n longitud: " + longitud);
    //console.log(this.parqueaderos);
    //return latitud;
  }



}
