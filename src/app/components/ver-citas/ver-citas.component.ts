import { Component, OnInit } from '@angular/core';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css'],
})
export class VerCitasComponent implements OnInit {
  mostrarCitas: any;
  alojamiento: string;
  alojamientoObject: any;
  alojamientoObjectStorage: any;
  arrayCitasObect: any;

  constructor(
    private servicioCitas: ServicioCitasService,
    private route: ActivatedRoute
  ) {
    this.alojamiento = localStorage.getItem('informacionCasaElegida')!;
    this.alojamientoObject = JSON.parse(this.alojamiento);
  }

  ngOnInit() {
    //------
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
    this.arrayCitasObect = this.servicioCitas.obtenerCitas();
    let arrayCitas = JSON.stringify(this.arrayCitasObect);
    localStorage.setItem("arrayCitas" , arrayCitas);
    //MOSTRAR INFORMACION DEL LOCAL STORAGE
    //Aqui se obtiene la informacion de nuestro array del LocalStorage para asi poder mostrarla 
    // en la tabla de mis reservaciones
    this.mostrarCitas = JSON.parse(localStorage.getItem("arrayReservaciones")!);
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
}
