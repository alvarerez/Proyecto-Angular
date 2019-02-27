import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.css']
})
export class PersonajesDetalleComponent implements OnInit {
 id: any;
  resultados : any;
  constructor(private servicio:MiservicioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.servicio.buscadorPersonajeDetalle(this.id).subscribe(data=>this.resultados = data);
});
  }

}
