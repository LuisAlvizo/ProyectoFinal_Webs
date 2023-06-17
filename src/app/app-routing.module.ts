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
import { OpLoginComponent } from './components/op-login/op-login.component';
import { OpRegistroComponent } from './components/op-registro/op-registro.component';
import { LoginComponent } from './components/login/login.component';
import { LoginTelComponent } from './components/login-tel/login-tel.component';
import { RegUsuariosComponent } from './components/reg-citas/reg-citas.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroTelComponent } from './components/registro-tel/registro-tel.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { VerificacionTelComponent } from './components/verificacion-tel/verificacion-tel.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


// Aqui estan las rutas que utilizamos
const routes: Routes = [
  { path: '', redirectTo: 'oplogin', pathMatch: 'full' },
  { path: 'oplogin', component: OpLoginComponent },
  { path: 'opregistro', component: OpRegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logintel', component: LoginTelComponent },
  { path: 'dashboard', component: RegUsuariosComponent },
  { path: 'recuperacion', component: RecuperarContraComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registrotel', component: RegistroTelComponent },
  { path: 'verificacion', component: VerificacionComponent },
  { path: 'verificaciontel', component: VerificacionTelComponent },
  { path: 'regUser', component: RegUsuariosComponent },
  { path: 'usuarios', component: UsuariosComponent },
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
