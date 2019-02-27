import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

 resultados : any;
  constructor(private _MiservicioService:MiservicioService) { }

 ngOnInit(): void {
    this._MiservicioService.buscadorPersonaje().subscribe(data=>this.resultados = data)
  }


}
