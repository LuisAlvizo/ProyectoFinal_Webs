import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioCitasService {
  private citas: any = [];

  // esta funcion nos ayuda a validar y guardar citas que no esten previamente ya registradas para que de esta manera
  // despues se pueda mostrar en la tabla de alojamientos

  //DATOS PRPORCIONADOS 
  // esta funcion nos proporciona un true o un false si es que la cita es valida o no, para que de esta 
  // manera poder controlar nuestra logica 
  //si nos devuelve un true nos manda a otra pagina sino no 
  guardarInformacion(citaEnviada: any) {
    // Aqui se obtiene y se valida la informacion en el localStorage si es que hay reservaciones
    if (window.localStorage.getItem('arrayReservaciones') !== '[]') {
      this.citas = JSON.parse(
        window.localStorage.getItem('arrayReservaciones')!
      );
    }
    // se crea una variable que nos ayudara a controlar si hay citas que coincidan con la que
    // acaban de registrar
    let fechasOcupadas = 0;
    // se verifica si hay citas guardadas en nuestra variable de control
    if (this.citas.length > 0) {
      this.citas.map((cita: any) => {
        // validacion que nos ayuda si la cita registrada concide con alguna de las que ya tenemos
        // en existencia, si es que se cumple, nuestra variable que controla las fechas ocupadas aumenta
        if (
          citaEnviada.arriveDate === cita.arriveDate &&
          citaEnviada.casaReservada.id === cita.casaReservada.id
        ) {
          fechasOcupadas++;
        }
      });
      // esta validacion se usa para saber si es  que la cita por registrar no esta ocupada y de esta manera
      // manera saber si el registro es valido o no
      if (fechasOcupadas > 0) {
        return false;
      } else {
        this.citas.push(citaEnviada);
        return true;
      }
    } else {
      this.citas.push(citaEnviada);
      return true;
    }
  }

  obtenerCitas() {
    return this.citas;
  }
}
