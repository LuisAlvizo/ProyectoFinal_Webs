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
      const fullName = params['get']('id').substring(1);
      if (fullName != 'null') {
        console.log(fullName);
        
        this.obtenerQr(fullName);
      }
    });
  }

  obtenerQr(fullName: any) {
    let body = {
      fullName : fullName
    }
    this.servicioCitas
      .obtenerQr('https://servernodejs.onrender.com/userQr', body)
      .then((result: any) => {
        this.generarQr(result.result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Funcion que ayuda a generar el qr
  generarQr(obj: any) {
    //se genera un numero del 0 a la longiitud del array para obtener un valor random valido
    // para obtener informacion

    //se convierte el valor del objeto ramdon obtenido a un string que se mostrara al scanear el qr
    this.value = JSON.stringify(obj);

    // nos ayuda a que una vez que se haya generado la informacion y se haya obetenido un valor se mueestre el
    // qr
    this.visibleQR = true;
  }
}
