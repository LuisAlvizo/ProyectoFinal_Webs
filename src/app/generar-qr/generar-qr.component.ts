import { Component, OnInit } from '@angular/core';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { ServicioCitasService } from '../services/citas/servicio-citas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.css'],
})
export class GenerarQrComponent implements OnInit {
  visibleQR = false; //Para que se muestre la informacion del qr
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH; //nivel de correciones del qr, por ejemplo
  //que el qr no salga distorcionado
  value = ''; //Guardamos el valor del objeto que tenemos en arrayPersonas

  constructor(
    private servicioCitas: ServicioCitasService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      //aqui se obtiene el valor que se paso por parametro en la ruta
      // este paramatro que recibimos es el nombre que enviaremos a nuestra peticion poara que obtenga los dats de dicha cita
      const fullName = params['get']('id').substring(1);
      if (fullName != 'null') {
        console.log(fullName);

        this.obtenerQr(fullName);
      }
    });
  }


    //  se creo esta funcion en la cual se declaro una variable llamada body la cual igualamos a fullname y se crea un objeto con este valor
    //  que es el que se manda a nuestra api para continuar con el flujo de la obtencion de datos 
  obtenerQr(fullName: any) {
    let body = {
      fullName: fullName,
    };
    this.servicioCitas
      .obtenerQr('https://servernodejs.onrender.com/userQr', body)
      .then((result: any) => {
        // Una vez que se obtuvo una respuesta positiva la informacion se manda a nuestra informacion de generar qr la cual nos yuda a continuar con nuestro flujo
        this.generarQr(result.result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Funcion que ayuda a generar el qr, esta funcion recibe un objeto que trae la informacion de nuestra consulta, esta la transfomamos en una sola cadena, la cual igualamos
  // al valor que me mostrara para poder generar el qr
  generarQr(obj: any) {
    //se convierte el valor del objeto ramdon obtenido a un string que se mostrara al scanear el qr
    this.value = JSON.stringify(obj);
    // nos ayuda a que una vez que se haya generado la informacion y se haya obetenido un valor se mueestre el
    // qr
    this.visibleQR = true;
  }
}
