import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  title = 'AngularCorreo_LAAL';
  resultado!: string;
  datos:FormGroup;
  constructor(private httpclient:HttpClient){
    this.datos = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
      correo:new FormControl('',[Validators.required,Validators.email]),
      numero: new FormControl('', [Validators.required, Validators.minLength(10)]),
      asunto:new FormControl('',Validators.required),
      mensaje:new FormControl('',Validators.required),
    })
  }
  
  envioCorreo(){
    if(this.datos.valid){
      this.resultado = "Todos los datos son válidos";
      Notiflix.Loading.standard('Cargando..'); // loading
      let params = {
        //email:this.datos.value.correo,
        email: "wichotl64@gmail.com", //CORREO ADMINISTRADOR ruvalcabasolisgonzalo19@gmail.com
        asunto:this.datos.value.asunto,
        //mensaje:this.datos.value.mensaje
        mensaje: "La persona con nombre: "+this.datos.value.nombre+" y correo: "+this.datos.value.correo+" a utilizado su formulario. \nPregunta: "+this.datos.value.mensaje
      }
      console.log(params)
      this.httpclient.post('https://apicorreo.onrender.com/envio',params).subscribe(resp=>{
        console.log(resp);
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Enviado Correctamente');
      });
      //var campo = document.getElementById('nombre') as HTMLInputElement;
      //campo.value = ''; // Establecer el valor del campo como una cadena vacía
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }
}
