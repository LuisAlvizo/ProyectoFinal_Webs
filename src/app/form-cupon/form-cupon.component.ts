import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cupon',
  templateUrl: './form-cupon.component.html',
  styleUrls: ['./form-cupon.component.css'],
})
export class FormCuponComponent implements OnInit {
  //estas variables controlan y obtienen el valor de los inputs relacionados a estas mismas 
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  correo: string = "";

  constructor(
    private router: Router) {

  }
  ngOnInit() {

    this.correo = localStorage.getItem("correo") || "";
    if (this.correo == "")
      this.router.navigate(['/login']);
  }
  //En esta funcion se hacen uso de los valores que se obtuvieron haciendo uso del doble binging entre 
  // la vista y el ts 
  enviarCupon() {
    if (this.email != '') {
      Swal.fire({
        icon: 'success',
        title: `Cupon enviado al correo ${this.email}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes de rellenar el campo de correo, ya que ahi se te enviará tu cupon de descuento',
      });
    }
  }
}
