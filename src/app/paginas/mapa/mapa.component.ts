import { Component, OnInit } from '@angular/core';
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { ParqueaderoService } from 'src/app/servicios/parqueadero.service';
import { RespParI } from 'src/app/interfaces/parqueadero';
import { RutasI } from 'src/app/interfaces/rutas';
import { RutasService } from 'src/app/servicios/rutas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  parqueaderos: RespParI[] = [];
  rutas:RutasI;
  private map: any;
  private marker:any;
  private polyline: any;
  coordenada: any;
  latitud: number;
  longitud: number;
  start:string = "";
  end:string="";

  constructor(
    private parqueaderoService: ParqueaderoService,
    private rutasService: RutasService
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
         this.marker = new L.Marker([par.latitud, par.longitud],{icon:p_o})
        .bindPopup(`${par.direccion}<br>precio:${par.precio}<br>horario:${par.horaApertura} - ${par.horaCierre}<br>puestos:${par.puestos}`)
        .openPopup().addTo(this.map);
        this.marker.on('click', (e)=>{
          var end = `${e.latlng.lng},${e.latlng.lat}`;
          this.setEnd(end);
          console.log();
        });

        }else if(par.puestos>1){
          this.marker = new L.Marker([par.latitud, par.longitud],{icon:p_d})
          .bindPopup(`${par.direccion}<br>precio:${par.precio}<br>horario:${par.horaApertura} - ${par.horaCierre}<br>puestos:${par.puestos}`)
          .openPopup().addTo(this.map);
          this.marker.on('click', (e)=>{
            var end = `${e.latlng.lng},${e.latlng.lat}`;
            this.setEnd(end);
            console.log();
          });
          
        }
        //this.calcularRoute();
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



    this.loadPar();
    console.log('map-->>',this.parqueaderos)
    
    //this.loadParToMap();
    /*for (const par of this.mapPar) {
      new L.Marker([par.latitud, par.longitud]).bindPopup('calle 53#45-10<br>precio:2000').openPopup().addTo(this.map);
    }*/
    //var markers = new L.Marker([10.987628, -74.789738]).bindPopup('calle 53#45-10<br>precio:2000').openPopup().addTo(this.map);

  }
  

  calcularRoute():void{
    Swal.fire({
      position: 'top',
      iconHtml: '<img src="../../../assets/img/par-coches.png" style="width: 10rem;">',
      customClass:{
        icon: 'border-0'
      },
      title: 'selecciona parqueadero y luego origen',
      showConfirmButton: false,
      timer: 2500
    });
    if (this.polyline!=null) {
      this.polyline.remove(this.map);
      this.polyline = null;
    }
    this.end ="";
    this.start="";
    this.map.on('click', (e) => {
      if (this.start=="") {
        this.start = `${e.latlng.lng},${e.latlng.lat}`;
        console.log(this.start,"&",this.getEnd());
        this.createRoute();
      }
    });
  }

  private createRoute():void{
    this.rutasService.getRutas(this.start,this.end)
    .subscribe(res =>{
      this.rutas = res;
      this.drawRoute(this.rutas);
      console.log(this.rutas);

    })
  }

  private drawRoute(rutaResponse:RutasI):void{
      var ruta = rutaResponse.features[0].geometry.coordinates;
      var latlong=[]
      ruta.forEach(element => {
        latlong.push([element[1],element[0]]);
      });
      this.polyline = new L.Polyline(latlong).addTo(this.map)
      this.map.fitBounds(latlong);
      console.log(latlong)
      
  }

  setEnd(end:string){
    this.end = end;
  }

  getEnd():string{
    return this.end;
  }
  

}
