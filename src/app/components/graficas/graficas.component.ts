import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BarController, CategoryScale, ChartData, LinearScale, Title } from 'chart.js';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit{
  
  constructor(private userService: UserServiceService) {}


   chart:  | undefined;
    ngOnInit(): void {
      this.userService.getCita().subscribe(citas => {
        const labels = citas.map(cita => cita.data.casaReservada.title);
        const data = citas.map(cita => cita.data.huespedes);
        this.createChart(labels, data);
      });
    }


      createChart(labels: string[], data: number[]) {
        Chart.register(BarController, LinearScale, CategoryScale);
      
        const barChart = new Chart('barChart', {
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

    Texto= "Gráfica de Barras";
    //Texto: segundo = "Hospedajes más reservados";

    Fecha: Date = new Date();

    }
