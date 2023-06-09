import { Component } from '@angular/core';
import { LugaresService, Lugar } from '../../shared/lugares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  lugares:Lugar[] ;
  index:number=-1;
  datos!: Lugar;
  mensaje!: string;

  constructor(public servicio: LugaresService, private router: Router){
    this.lugares=this.servicio.getLugar();
  }

 /* ver(aux:string){
    console.log("Estoy en el metodo ver"+aux);
    this.index = this.lugares.findIndex(p => p.title === aux);
    console.log(this.index);
    if(this.index !== -1){
      this.datos = this.lugares[this.index];
      console.log(this.datos);
    }else{
      this.mensaje="El lugar no exite!";
      //console.log(this.mensaje);
      setTimeout(() => {
        this.mensaje="";
      }, 2000);
    }
  }*/
 dirigirBusqueda(buscar: string) {
    if (buscar !=''){
      this.router.navigate(['mostrar/' + buscar])
    }else{
      this.router.navigate(['']);
    }
 }
  } 
