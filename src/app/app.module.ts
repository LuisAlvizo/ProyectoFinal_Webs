import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';

//se estan utilizando los modulos de formsModule y reactiveFormsModule
// se importo tambien el uso de FormsModule para el uso correcto del doble binding
// (ngModel)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { PantallaProgramadoresComponent } from './components/pantalla-programadores/pantalla-programadores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DomseguroPipe } from './domseguro.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCuponComponent } from './form-cupon/form-cupon.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DatosComponent } from './components/datos/datos.component';
import { HttpClientModule } from '@angular/common/http';
import { MostrarComponent } from './components/mostrar/mostrar.component';

//servicio
import { LugaresService } from './shared/lugares.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [

    //Aqui estan todos los componentes
    AppComponent,
    AlojamientosComponent,
    RegistroCitasComponent,
    VerCitasComponent,
    PantallaProgramadoresComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DomseguroPipe,
    FormCuponComponent,
    DatosComponent,
    MostrarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
