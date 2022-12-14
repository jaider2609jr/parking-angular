import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DatosPersonalesComponent } from './paginas/datos-personales/datos-personales.component';
import { EditarParqueaderoComponent } from './paginas/editar-parqueadero/editar-parqueadero.component';
import { ErrorComponent } from './paginas/error/error.component';
import { GestionParqueaderosComponent } from './paginas/gestion-parqueaderos/gestion-parqueaderos.component';
import { GestionVehiculosComponent } from './paginas/gestion-vehiculos/gestion-vehiculos.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { ParqueaderosBorradosComponent } from './paginas/parqueaderos-borrados/parqueaderos-borrados.component';
import { RegistroParqueaderoComponent } from './paginas/registro-parqueadero/registro-parqueadero.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { RegistroVehiculoComponent } from './paginas/registro-vehiculo/registro-vehiculo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registrar-usuario', component: RegistroUsuarioComponent },
  { path: 'registrar-vehiculos', component: RegistroVehiculoComponent,canActivate:[AuthGuard]},
  { path: 'registrar-parqueaderos', component: RegistroParqueaderoComponent,canActivate:[AuthGuard]},
  { path: 'mapa', component: MapaComponent,canActivate:[AuthGuard]},
  { path: 'gestionar-parqueaderos', component: GestionParqueaderosComponent,canActivate:[AuthGuard]},
  { path: 'parqueaderos-borrados', component: ParqueaderosBorradosComponent,canActivate:[AuthGuard]},
  { path: 'parqueadero/editar/:id', component: EditarParqueaderoComponent,canActivate:[AuthGuard]},
  { path: 'gestionar-vehiculos', component: GestionVehiculosComponent,canActivate:[AuthGuard]},
  { path: 'mis-datos', component: DatosPersonalesComponent,canActivate:[AuthGuard]},
  { path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
