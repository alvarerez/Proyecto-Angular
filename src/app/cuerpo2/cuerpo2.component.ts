import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';
@Component({
  selector: 'app-cuerpo2',
  templateUrl: './cuerpo2.component.html',
  styleUrls: ['./cuerpo2.component.css']
})
export class Cuerpo2Component implements OnInit {

  resultados : any;
  constructor(private _MiservicioService:MiservicioService) { }

 ngOnInit(): void {
    this._MiservicioService.buscadorAnime().subscribe(data=>this.resultados = data)
  }

}
