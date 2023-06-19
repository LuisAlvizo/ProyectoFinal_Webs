import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BarController, CategoryScale, ChartData, LinearScale, Title } from 'chart.js';
import { Router } from '@angular/router';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  chart: | undefined;
  correo: string = "";
  constructor(private router: Router) {

  }
  ngOnInit(): void {


    this.correo = localStorage.getItem("correo") || "";
    if (this.correo == "")
      this.router.navigate(['/login']);
    Chart.register(BarController, LinearScale, CategoryScale);
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Villa Completa en Punta Cana', 'Hotel Majestic-Barcelona', 'Casa Ecológica en Groenlandia', 'Casa frente al mar en Cancún',
          'Villa en Mazamitla', 'Villa completa en Vallarta'],
        datasets: [
          { data: [45, 49, 50, 41, 30, 32], label: 'Número de Reservaciones', backgroundColor: 'green', hoverBackgroundColor: 'purple' },
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }

  Texto = "Gráfica de Barras";
  //Texto: segundo = "Hospedajes más reservados";

  Fecha: Date = new Date();
export class GraficasComponent implements OnInit{
  
  //se inyecta el servicio en el constructor
  constructor(private userService: UserServiceService) {}


   chart:  | undefined;
    ngOnInit(): void {
      //se obtienen los datos de la base de datos con el método getCita() del servicio
      this.userService.getCita().subscribe(citas => {
        //obtenemos el titulo de las casas reservadas y el número de huespedes
        const labels = citas.map(cita => cita.data.casaReservada.title);
        const data = citas.map(cita => cita.data.huespedes);
        //creamos nuestra gráfica con dichos valores
        this.createChart(labels, data);
      });
    }

      //se crea la gráfica con escalas de x,y y el tipo de gráfico de barras
      createChart(labels: string[], data: number[]) {
        Chart.register(BarController, LinearScale, CategoryScale);
      //se crea una nueva instancia de la clase chart y los asignamos al id del html
        const barChart = new Chart('barChart', {
          //se le asignan todos los valores y características de la gráficas de barras
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              { data: data, label: 'Número de Huéspedes', backgroundColor: 'green', hoverBackgroundColor: 'purple' },
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                type: 'linear',
                beginAtZero: true
              }
            }
          }
        });
      }      

    //pipe personalizado
    Texto= "Gráfica de Barras";
    //pipe predeterminado
    Fecha: Date = new Date();

}
