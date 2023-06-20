import { Component, OnInit } from '@angular/core';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css'],
})
export class VerCitasComponent implements OnInit {
  correo: string = "";
  mostrarCitas: any;
  alojamiento: string;
  alojamientoObject: any;
  alojamientoObjectStorage: any;
  arrayCitasObect: any;
  visibleQR: boolean = false;
  value = '';
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH; //nivel de correciones del qr, por ejemplo

  constructor(
    private servicioCitas: ServicioCitasService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.alojamiento = localStorage.getItem('informacionCasaElegida')!;
    this.alojamientoObject = JSON.parse(this.alojamiento);
  }

  ngOnInit() : void{
    //------
    this.correo = localStorage.getItem("correo") || "";
    if (this.correo == "")
      this.router.navigate(['/login']);

    this.route.paramMap.subscribe((params: Params) => {
      //aqui se obtiene el valor que se paso por parametro en la ruta
      const nombreReservaStorage = params['get']('nombreReservaStorage');
      if (nombreReservaStorage != 'null') {
        // Con el valor obtenido en el parametro de la ruta, hacemos la consulta correspodniente al localStorage
        // de este valor para asi obtener el objeto del registro que se acaba de realizar y de esta manera, mostrar una alerta
        // con esta informacion, para que asi el usuario vea los datos que ingreso anteriormente
        this.alojamientoObjectStorage = JSON.parse(
          localStorage.getItem(nombreReservaStorage.substring(1))!
        );
        this.showModal();
      }
    });
    //-----
    //this.arrayCitasObect = this.servicioCitas.obtenerCitas();
    //let arrayCitas = JSON.stringify(this.arrayCitasObect);
    //localStorage.setItem('arrayCitas', arrayCitas);
    //MOSTRAR INFORMACION DEL LOCAL STORAGE
    //Aqui se obtiene la informacion de nuestro array del LocalStorage para asi poder mostrarla
    // en la tabla de mis reservaciones
    //this.mostrarCitas = JSON.parse(localStorage.getItem('arrayReservaciones')!);
    this.consultar();

      // Realiza cualquier otra lógica necesaria con las citas
 
  }

  async consultar() {
    this.mostrarCitas= await this.userService.getConsulta3();
  }
  
  showModal() {
    Swal.fire({
      icon: 'success',
      title: `Reservacion registrada en el destino ${this.alojamientoObjectStorage.casaReservada.title} \n 
      para el dia ${this.alojamientoObjectStorage.arriveDate} \n
      para la hora ${this.alojamientoObjectStorage.hora}`,
      showConfirmButton: true,
    });
  }

  generarQr(name: string) {
    // this.router.navigate([`/generarQr/:Juan`]);
    this.router.navigate([`/generarQr/:${name}`]);
  }


  //eliminar citas 
  // esta funcion nos ayuda a poder eliminar la cita registrada, lo que se hace
  // es mandar el nombre del registro de la cita a una api que esta es nuestro servidor donde se hara una consulta a 
  // firebase y continuara con el flujo de cancelacion 
  eliminar(fullName: any) {
    let body = {
      fullName: fullName
    }
    this.servicioCitas
      .obtenerQr('https://sernodejs.onrender.com/cancelar', body)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
