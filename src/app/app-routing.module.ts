import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionParqueaderosComponent } from './paginas/gestion-parqueaderos/gestion-parqueaderos.component';
import { GestionVehiculosComponent } from './paginas/gestion-vehiculos/gestion-vehiculos.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { RegistroParqueaderoComponent } from './paginas/registro-parqueadero/registro-parqueadero.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { RegistroVehiculoComponent } from './paginas/registro-vehiculo/registro-vehiculo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistroUsuarioComponent },
  { path: 'registrar-vehiculos', component: RegistroVehiculoComponent},
  { path: 'registrar-parqueaderos', component: RegistroParqueaderoComponent},
  { path: 'mapa', component: MapaComponent},
  { path: 'gestionar-parqueaderos', component: GestionParqueaderosComponent},
  { path: 'gestionar-vehiculos', component: GestionVehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
