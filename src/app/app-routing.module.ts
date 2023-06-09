import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PantallaProgramadoresComponent } from './components/pantalla-programadores/pantalla-programadores.component';
import { FormCuponComponent } from './form-cupon/form-cupon.component';
import { DatosComponent } from './components/datos/datos.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';


// Aqui estan las rutas que utilizamos
const routes: Routes = [
  { path: 'cupon', component: FormCuponComponent },
  //Ruta con paso de parametro
  { path: 'registro/:id', component: RegistroCitasComponent },
  { path: 'alojamientos', component: AlojamientosComponent },
  //Ruta con paso de parametro  nombreReservaStorage
  // este parametro nos ayuda a obtener el nombre con el que se ha guardado nuestro objeto de la reservacion en 
  // el localStorage 
  { path: 'verCitas/:nombreReservaStorage', component: VerCitasComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'datos', component: DatosComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'programadores', component: PantallaProgramadoresComponent  },
  { path: 'mostrar/:buscar', component: MostrarComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
