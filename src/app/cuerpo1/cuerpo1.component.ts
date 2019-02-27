import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cuerpo1',
  templateUrl: './cuerpo1.component.html',
  styleUrls: ['./cuerpo1.component.css']
})

// export class Cuerpo1Component implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class Cuerpo1Component implements OnInit {
resultados : any;
  constructor(private _MiservicioService:MiservicioService) { }

 ngOnInit(): void {
    this._MiservicioService.buscadorManga().subscribe(data=>this.resultados = data)
  }

}
