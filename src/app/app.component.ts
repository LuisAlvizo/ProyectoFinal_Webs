import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniProyecto2';

  constructor(){
    if(localStorage.getItem("arrayReservaciones") === "[]" || !localStorage.getItem("arrayReservaciones")){
      localStorage.setItem("arrayReservaciones" , "[]");
    }
  }
}


