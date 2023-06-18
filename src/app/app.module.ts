import { NgModule, isDevMode,CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { OpLoginComponent } from './components/op-login/op-login.component';
import { LoginTelComponent } from './components/login-tel/login-tel.component';
import { OpRegistroComponent } from './components/op-registro/op-registro.component';
import { RegistroTelComponent } from './components/registro-tel/registro-tel.component';
import { VerificacionTelComponent } from './components/verificacion-tel/verificacion-tel.component';
import { RegUsuariosComponent } from './components/reg-citas/reg-citas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environments/environment.prod';
import { ToastrModule } from 'ngx-toastr';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgOtpInputModule } from 'ng-otp-input';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GenerarQrComponent } from './generar-qr/generar-qr.component';

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
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    VerificacionComponent,
    RecuperarContraComponent,
    SpinnerComponent,
    OpLoginComponent,
    LoginTelComponent,
    OpRegistroComponent,
    RegistroTelComponent,
    VerificacionTelComponent,
    RegUsuariosComponent,
    UsuariosComponent,
    GenerarQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxQRCodeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgOtpInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
