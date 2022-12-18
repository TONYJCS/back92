import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artistas } from './artistas';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {


  //URL BASE DE CONEXION ALA BACKEND
  private URLBase = 'http://localhost:8080/apiRest/'

  constructor(private httpClient:HttpClient) { 

  }

  ObtenerArtista():Observable<Artistas[]>{
    return this.httpClient.get<Artistas[]>(`${this.URLBase + 'artistas/obtener'}`);
  }

  registrarArtista(art:Artistas):Observable<Object>{
    return this.httpClient.post(`${this.URLBase + 'artistas/insertar'}`,art) 
  }
  
  actualizarArtista(id:number, art:Artistas):Observable<Object>{
    return this.httpClient.put(`${this.URLBase + 'artistas/modificar'}/${id}`,art)
  }

  obtenerArtistaUnico(id:number):Observable<Artistas>{
    return this.httpClient.get<Artistas>(`${this.URLBase + 'artistas/obtener'}/${id}`);
  }
  eliminarArtista(id:number):Observable<object>{
    return this.httpClient.delete(`${this.URLBase + 'artistas/eliminar'}/${id}`);
  }
} 
