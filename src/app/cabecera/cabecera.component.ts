import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private servicio: MiservicioService) { }

  ngOnInit() {
  }
 cambiar_estilo(param){
    this.servicio.cambia_Estilo(param);
  }
}
