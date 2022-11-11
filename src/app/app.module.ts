import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
import { AuthService } from './servicios/auth.service';
import { ParametrosService } from './servicios/parametros.service';
import { AuthGuard } from './auth.guard';
import { ParqueaderosBorradosComponent } from './paginas/parqueaderos-borrados/parqueaderos-borrados.component';
import { EditarParqueaderoComponent } from './paginas/editar-parqueadero/editar-parqueadero.component';

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
    ErrorComponent,
    ParqueaderosBorradosComponent,
    EditarParqueaderoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ParametrosService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
