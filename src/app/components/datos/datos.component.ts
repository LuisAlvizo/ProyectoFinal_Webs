import { Component } from '@angular/core';
import { ApiDatosService } from 'src/app/api-datos.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  data:any;

  constructor(private apiDatosService: ApiDatosService) { }

  ngOnInit() {
    this.recuperarDatos();
  }

  recuperarDatos() {

    //opcion1
    this.apiDatosService.retornar().subscribe(
      (result:any) => {
        this.data = result.results;
        console.log(this.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );

    //opcion2 
    /*this.apiDatosService.retornar().subscribe({
      next: (v) => {this.data=v; console.log(v)},
      error: (e) => console.error(e),})
    */ 
  }
}
