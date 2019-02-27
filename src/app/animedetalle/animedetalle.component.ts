import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-animedetalle',
  templateUrl: './animedetalle.component.html',
  styleUrls: ['./animedetalle.component.css']
})
export class AnimedetalleComponent implements OnInit {
  id: any;
  resultados : any;
  constructor(private servicio:MiservicioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.servicio.buscadorDetalle(this.id).subscribe(data=>this.resultados = data);
});
  }

}
