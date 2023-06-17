import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
    let params = {
      email:this.datos.value.correo,
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje
    }
    console.log(params)
    this.httpclient.post('http://localhost:3000/envio',params).subscribe(resp=>{
      console.log(resp);
    });
  }
}
