import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDatosService {
  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://api.datos.gob.mx/v1/condiciones-atmosfericas");
  }
}
