import { Component, OnInit  } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit{
  consultaText: string = "";
  citas$: any;
  usuarios$: any;
  
  constructor(private userService: UserServiceService) { }


  ngOnInit() {
    //this.consultar("Cabañas en Maldivas");
    //this.consultar("Casa frente al mar en Cancún");
  }

  async consultar() {
    if (this.consultaText) {
      this.citas$ = this.userService.getConsulta(this.consultaText).pipe(
        map(citas => {
          if (citas.length > 0) {
            return citas;
          } else {
            Swal.fire({
              icon: 'info',
              title: 'No se encontraron resultados',
              text: 'Por favor, intenta con otro alojamiento.'
            });
            return null;
          }
        })
      );
    }
  }
  
  async consultar2() {
    this.usuarios$ = await this.userService.getConsulta2();
  }


}


