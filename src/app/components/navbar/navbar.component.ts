import { Component, OnInit } from '@angular/core';
import { LugaresService, Lugar } from '../../shared/lugares.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lugares: Lugar[];
  index: number = -1;
  datos!: Lugar;
  mensaje!: string;
  loginUsuario: boolean = false;
  loginADMIN: boolean = false;
  correo: string = "";
  usuarios: any;
  usuarioLoggeado: string = "";



  constructor(public servicio: LugaresService, private router: Router, private userService: UserServiceService) {
    this.lugares = this.servicio.getLugar();
    this.correo = localStorage.getItem("correo") || "";
    this.getUser();
    alert("constructor");
  }
  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
    this.usuarios = await this.userService.getUsersAuth();
    this.usuarios.forEach((user: any) => {
      user.forEach((datos: any) => {
        if (datos.data.correo == this.correo) {
          this.usuarioLoggeado = datos.data.identificador;
          if (this.usuarioLoggeado == 'ADMIN') {
            this.loginADMIN = true;
            console.log('admin');
          }
          else {
            this.loginUsuario = true;
          }
        }
      });
    });
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
    if (buscar != '') {
      this.router.navigate(['mostrar/' + buscar])
    } else {
      this.router.navigate(['']);
    }
  }

  cerrarSesion() {
    this.loginADMIN = false;
    this.loginUsuario = false;
    this.usuarioLoggeado="";
    localStorage.removeItem("correo");
    alert("cerrar sesion");
  }
} 
