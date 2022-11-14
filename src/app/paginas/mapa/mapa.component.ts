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

  constructor(
    private parqueaderoService: ParqueaderoService
  ) { }



  ngOnInit(): void {
    //this.loadPar();
    this.initMap();
  }

  loadPar(): void {
    this.parqueaderoService.getParqueaderos().subscribe(res => {
      console.log('>>>>>', res);
      this.parqueaderos = res;
      var p_d = L.icon({
        iconUrl: '../../../assets/img/p-desocupado.png',
        
    
        iconSize:     [41, 41], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [20, 41], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-1, -34] // point from which the popup should open relative to the iconAnchor
    });

    var p_o = L.icon({
      iconUrl: '../../../assets/img/p-ocupado.png',
      
  
      iconSize:     [41, 41], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [20, 41], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-1, -34] // point from which the popup should open relative to the iconAnchor
  });

      res.map(par=>{
        if (par.puestos==1) {
          new L.Marker([par.latitud, par.longitud],{icon:p_o})
        .bindPopup(`${par.direccion}<br>precio:${par.precio}<br>horario:${par.horaApertura} - ${par.horaCierre}<br>puestos:${par.puestos}`)
        .openPopup().addTo(this.map);
        }else if(par.puestos>1){
          new L.Marker([par.latitud, par.longitud],{icon:p_d})
          .bindPopup(`${par.direccion}<br>precio:${par.precio}<br>horario:${par.horaApertura} - ${par.horaCierre}<br>puestos:${par.puestos}`)
          .openPopup().addTo(this.map);
        }
        
      })
      
    },
      err => console.log(err)
    );
  }

  private initMap(): void {
    this.map = L.map("map").setView([10.98719, -74.78814], 14);

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
    this.loadPar();
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
