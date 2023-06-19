import { Component, OnInit  } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit{

  citas$: any;
  
  constructor(private userService: UserServiceService) { }


  ngOnInit() {
    //this.consultar("Cabañas en Maldivas");
    //this.consultar("Casa frente al mar en Cancún");
  }

  async consultar(nombre: string) {
    this.citas$ = await this.userService.getConsulta(nombre);
  }

}


