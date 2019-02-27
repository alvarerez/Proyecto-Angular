import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-cuerpo3',
  templateUrl: './cuerpo3.component.html',
  styleUrls: ['./cuerpo3.component.css']
})
export class Cuerpo3Component implements OnInit {

   resultados : any;
  constructor(private _MiservicioService:MiservicioService) { }

 ngOnInit(): void {
    this._MiservicioService.buscadorTemporada().subscribe(data=>this.resultados = data)
  }

}
