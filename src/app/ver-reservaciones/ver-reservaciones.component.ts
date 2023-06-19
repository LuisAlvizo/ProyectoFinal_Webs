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

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.correo = localStorage.getItem("correo") || "";
    if (this.correo == "")
      this.router.navigate(['/login']);
    this.getCitas();
  }

  async getCitas() {
    this.mostrarCitas = await this.userService.getCita();
  }


}
