import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BarController, CategoryScale, ChartData, LinearScale, Title } from 'chart.js';
import { Router } from '@angular/router';


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

}
