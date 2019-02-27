import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Cuerpo1Component} from './cuerpo1/cuerpo1.component';
import {Cuerpo2Component} from './cuerpo2/cuerpo2.component';
import {Cuerpo3Component} from './cuerpo3/cuerpo3.component';
import {DetalleComponent} from './detalle/detalle.component';
import {AnimedetalleComponent} from './animedetalle/animedetalle.component';
import { ErrorComponent} from './error/error.component';
import { InicioComponent} from './inicio/inicio.component';
import { PersonajesComponent} from './personajes/personajes.component';
import { PersonajesDetalleComponent} from './personajes-detalle/personajes-detalle.component';

const routes: Routes = [
{path:'manga',component:Cuerpo1Component},
{path:'anime',component:Cuerpo2Component},
{path:'temporada',component:InicioComponent},
{path:'',component:Cuerpo3Component},
{ path: 'detalle/:id', component: DetalleComponent},
{ path: 'detalleAnime/:id', component: AnimedetalleComponent},
{ path: 'personajes', component: PersonajesComponent},
{ path: 'personajesDetalle/:id', component:PersonajesDetalleComponent},
{ path: '**', component: ErrorComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
