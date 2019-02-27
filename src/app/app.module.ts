import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { Cuerpo1Component } from './cuerpo1/cuerpo1.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { Cuerpo3Component } from './cuerpo3/cuerpo3.component';
import { ErrorComponent } from './error/error.component';
import { MiservicioService } from './miservicio.service';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { AnimedetalleComponent } from './animedetalle/animedetalle.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajesDetalleComponent } from './personajes-detalle/personajes-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    Cuerpo1Component,
    Cuerpo2Component,
    Cuerpo3Component,
    ErrorComponent,
    DetalleComponent,
    AnimedetalleComponent,
    InicioComponent,
    PersonajesComponent,
    PersonajesDetalleComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Cuerpo1Component,Cuerpo2Component,Cuerpo3Component,MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
