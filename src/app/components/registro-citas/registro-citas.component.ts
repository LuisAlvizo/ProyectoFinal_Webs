import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

// modulos que se usan para la creacion de formularios y validacion de nuestros campos de input
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent implements OnInit {
  today: Date = new Date();
  selectedDate: Date | undefined;

  numeroDeCasaReservada = 0;

  registerForm: FormGroup;

  alojamiento: string;
  alojamientoObject: any;

  citas: any;
  constructor(
    private formBuilder: FormBuilder,
    private servicioCitas: ServicioCitasService,
    private router: Router,
    private userService: UserServiceService
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
      email: ['', Validators.required],
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

  ngOnInit(): void {
    this.getCitas();
  }

  async getCitas() {
    this.citas = await this.userService.getCita();
  }

  async eliminarCita(nombreUsuario: any) {
    await this.userService.eliminarCita(nombreUsuario);
  }

  async submitForm() {
    try {
      const resultado = await this.userService.addCita(this.registerForm.value);
      if (resultado) {
        this.insertar(this.registerForm.value);
        //GUARDAR INFORMACION EN EL LOCAL STORAGE
        //Aqui se guarda la informacion en la variable de alojamientosReservados, donde previamente
        // se utilizo la funcion parse para obtener los registros ya guardados y de esta manera poder hacer
        // un push dentro de nuestro array guardado en el localStorage
        let alojamientosReservados = localStorage.getItem('arrayReservaciones');
        let alojamientosReservadosStorage = JSON.parse(alojamientosReservados!);
        alojamientosReservadosStorage.push(this.registerForm.value);
        localStorage.setItem(
          'arrayReservaciones',
          JSON.stringify(alojamientosReservadosStorage)
        );
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
        this.router.navigate([
          `/verCitas/:${this.registerForm.value.casaReservada.id}${this.registerForm.value.hora}`,
        ]);
        this.registerForm.reset();
        this.getCitas();
      } else {
        this.showModal2();
      }
    } catch (error) {
      this.showModal2();
    }
  }

  insertar(reservacionObj: any): void {
    //Llamamos a alta y mandamos la url del API, al igual que mandamos
    // los datos del body
    //correo electronico
    // este objeto contienen los datos necesarios de la reservacion los cuales nosotros manejamos en la bd y utilizamos para mandar la
    // informacion necesaria por el correo que se les proporciona en este mismo Objecto
    this.servicioCitas
      .alta('https://sernodejs.onrender.com/user', reservacionObj)
      .then((data) => {
        console.log(data);
      })
      //aqui se maneja cualquier error que ocurra durante la solicitud
      // a la api
      .catch((err) => {
        console.log(err);
      });
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
