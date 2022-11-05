import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { RegistroParqueaderoComponent } from "../../paginas/registro-parqueadero/registro-parqueadero.component";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: any;
  coordenada:any;
  longitud:number;
  latitud:number;
  @Output() latEvent = new EventEmitter<number>();
  

  constructor() { }

  ngOnInit(): void {
    this.initMap();
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

    this.map.on('click', (e)=> {
      this.coordenada = e.latlng;
      this.latitud = e.latlng.lat;
      this.longitud = e.latlng.lng;
      this.latEvent.emit(this.coordenada);
      console.log("Acabas de hacer clic en: \n latitud: " + this.latitud + "\n longitud: " + this.longitud);
  });
  }


  

}
