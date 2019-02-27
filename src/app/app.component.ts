import { Component } from '@angular/core';
import { MiservicioService } from './miservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-Jose';
  estilo_calido = true;

  constructor(private servicio:  MiservicioService){
  }
  
    ngOnInit(){
      this.servicio.estilo_claro.subscribe(data => {
        this.estilo_calido = data;
        console.log('nuevo estilo:',this.estilo_calido);
        this.cargar_estilo(this.estilo_calido);
      })
    }
  
    cargar_estilo(para) {
      if(para){
        require("style-loader!./../styles.css");
      }
      else{
        require("style-loader!./../styles2.css")
      }
    }
}
