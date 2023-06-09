import { Component, NgModule, OnInit } from '@angular/core';
import { LugaresService, Lugar } from '../../shared/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})

export class MostrarComponent implements OnInit {
  datoss = '';
  lugares:Lugar[] ;
  index:number=-1;
  datos!: Lugar;
  mensaje!: string;

  constructor(public servicio: LugaresService, private router: ActivatedRoute, private route: Router){
    this.lugares=this.servicio.getLugar();
  }

  reservar(casaElegida: any) {
    this.route.navigate([`/registro/:${casaElegida.id}`]);
    let alojamiento = JSON.stringify(casaElegida);
    localStorage.setItem('informacionCasaElegida', alojamiento);
    console.log(casaElegida);
  }



  ngOnInit(): void {
    this.router.params.subscribe(params => {
    this.datoss = params['buscar'];
    console.log("Estoy en el metodo ver"+this.datos);
    this.index = this.lugares.findIndex(p => p.title === this.datoss);
    console.log(this.index);
    if(this.index !== -1){
      this.datos = this.lugares[this.index];
      console.log(this.datos)
    }else{
      this.mensaje="El lugar no existe!";
      //console.log(this.mensaje);
      setTimeout(() => {
        this.mensaje="";
        this.route.navigate(['home/'])
      }, 2000);

    }
  })
  }
}
