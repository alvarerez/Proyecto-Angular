import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cuerpo1Component } from './cuerpo1/cuerpo1.component';

import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  private apiURL = 'https://api.jikan.moe/v3';
  static query: string;
  private id = new Subject<any>();
  public id$ = this.id.asObservable();
  private sub_estilo = new Subject<any>();
  public estilo_claro = this.sub_estilo.asObservable();

  setId(valor){
    this.id.next(valor);
  }

  constructor(private http: HttpClient){
  }
// busquedas
  buscadorManga():Observable<any>{
    // this.http.get('https://api.jikan.moe/v3/search/manga?q=fate').subscribe(data=>{
    //   this.array
    // })
    return this.http.get('https://api.jikan.moe/v3/search/manga?q=fate');
}
  buscadorID(dato):Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/manga/"+ dato);
  }
  buscadorDetalle(dato):Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/anime/"+ dato);
  }
  buscadorAnime():Observable<any>{
    return this.http.get('https://api.jikan.moe/v3/search/anime?q=pokemon');
  }
  buscadorTemporada():Observable<any>{
    return this.http.get('https://api.jikan.moe/v3/season');
  }
  buscadorNuevaTemporada():Observable<any>{
    return this.http.get('https://api.jikan.moe/v3/season/2019/summer');
  }
  buscadorPersonaje():Observable<any>{
    return this.http.get('https://api.jikan.moe/v3/anime/35972/characters_staff');
  }
  buscadorPersonajeDetalle(dato):Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/character/"+ dato);
  }
  cambia_Estilo(calido){
    this.sub_estilo.next(calido);
    console.log("se ha cambiado el estilo");
  }
}
// yo tambien te amo Jose
