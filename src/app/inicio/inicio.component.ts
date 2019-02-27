import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  resultados : any;
  constructor(private _MiservicioService:MiservicioService) { }

 ngOnInit(): void {
    this._MiservicioService.buscadorNuevaTemporada().subscribe(data=>this.resultados = data)
  }
}
