import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { GestionParqueaderosComponent } from './paginas/gestion-parqueaderos/gestion-parqueaderos.component';
import { GestionVehiculosComponent } from './paginas/gestion-vehiculos/gestion-vehiculos.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { RegistroParqueaderoComponent } from './paginas/registro-parqueadero/registro-parqueadero.component';
import { RegistroVehiculoComponent } from './paginas/registro-vehiculo/registro-vehiculo.component';
import { MapComponent } from './componentes/map/map.component';
import { ErrorComponent } from './paginas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MapaComponent,
    GestionParqueaderosComponent,
    GestionVehiculosComponent,
    RegistroUsuarioComponent,
    RegistroParqueaderoComponent,
    RegistroVehiculoComponent,
    MapComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
