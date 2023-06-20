import { Component, OnInit } from '@angular/core';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-ver-reservaciones',
  templateUrl: './ver-reservaciones.component.html',
  styleUrls: ['./ver-reservaciones.component.css']
})
export class VerReservacionesComponent implements OnInit {
  mostrarCitas: any;
  correo: string = "";
  valUsuario: string = "";

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.correo = localStorage.getItem("correo") || "";
    this.valUsuario = localStorage.getItem("usuario") || "";
    if (this.correo == "" || this.valUsuario == "" || this.valUsuario != "admin")
      this.router.navigate(['/home']);
    this.getCitas();
  }

  async getCitas() {
    this.mostrarCitas = await this.userService.getCita();
  }


}
