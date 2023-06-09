import { Component } from '@angular/core';

// modulos que se usan para la creacion de formularios y validacion de nuestros campos de input 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent {
  today: Date = new Date();
  selectedDate: Date | undefined;

  numeroDeCasaReservada = 0;

  registerForm: FormGroup;

  alojamiento: string;
  alojamientoObject: any;

  constructor(
    private formBuilder: FormBuilder,
    private servicioCitas: ServicioCitasService,
    private router: Router
  ) {
    this.alojamiento = localStorage.getItem('informacionCasaElegida')!;
    this.alojamientoObject = JSON.parse(this.alojamiento);


    // en esta parte se utilizan los modulos importados para la creacion de formularios
    //  reactivos y la validacion de este mismo 
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      casaReservada: [this.alojamientoObject],
      direccion: ['', Validators.required],
      arriveDate: ['', Validators.required],
      lastDate: ['', Validators.required],
      huespedes: ['', Validators.required],
      hora: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16),
        ],
      ],
      expirationDate: ['', Validators.required],
      securityCode: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
      ],
    });
  }

  async submitForm() {
    let validarRegistro: any;
    // console.log(this.registerForm);

    // Aqui se utiliza el servicio para guardar nuestra cita generada y despues porderla consultar
    // nuestra variable de validarRegistro nos gusrada el valor que nos regresa nuestra funcion de servicio
    // si nos devuelve un true, continuamos con el flujo normal de la palicacion, si es false nos muestra un mensaje 
    // de error
    validarRegistro = await this.servicioCitas.guardarInformacion(
      this.registerForm.value
    );

    if (validarRegistro) {
      //GUARDAR INFORMACION EN EL LOCAL STORAGE
      //Aqui se guarda la informacion en la variable de alojamientosReservados, donde previamente
      // se utilizo la funcion parse para obtener los registros ya guardados y de esta manera poder hacer 
      // un push dentro de nuestro array guardado en el localStorage 
      let alojamientosReservados = localStorage.getItem("arrayReservaciones");
      let alojamientosReservadosStorage = JSON.parse(alojamientosReservados!);
      alojamientosReservadosStorage.push(this.registerForm.value);
      localStorage.setItem("arrayReservaciones" , JSON.stringify(alojamientosReservadosStorage))
      let registroCliente = JSON.stringify(this.registerForm.value);
      //------ Aqui se genera un objeto en el localStorage con una llave unica que es generada
      //mediante el registro que se hace (id y hora) de reserva.
      localStorage.setItem(
        `${this.registerForm.value.casaReservada.id}${this.registerForm.value.hora}`,
        registroCliente
      );
      //----
      this.numeroDeCasaReservada++;
      console.log(registroCliente);
      localStorage.removeItem('informacionCasaElegida');
      // Aqui se le esta pasando el mismo valor del objeto generado en el local storage
      this.router.navigate([`/verCitas/:${this.registerForm.value.casaReservada.id}${this.registerForm.value.hora}`]);
      this.registerForm.reset();
    } else {
      // alert('fecha en que has guardado info ya esta ocupada');
      this.showModal2();
    }
  }

  showModal() {
    Swal.fire({
      icon: 'success',
      title: 'Reservacion confirmada',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  showModal2() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La fecha que seleccionaste se encuentra ocupada',
      footer: 'Intenta con otra fecha',
    });
  }
}
