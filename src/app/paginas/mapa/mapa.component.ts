import { Component, OnInit } from '@angular/core';
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private map: any;
  coordenada:any;
  constructor() { }


  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map").setView([10.98719,-74.78814], 15);

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    tiles.addTo(this.map);

    (L.Control as any).geocoder().addTo(this.map);

    this.map.on('click', this.onMapClick);
  }

  

    private onMapClick(click:any):void{
        this.coordenada = click.latlng;
        var latitud = this.coordenada.lat; // lat  es una propiedad de latlng
        var longitud = this.coordenada.lng; // lng también es una propiedad de latlng
        console.log("Acabas de hacer clic en: \n latitud: " + latitud + "\n longitud: " + longitud);
    }

}
