import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URLbase='http://localhost:8080/apiRest/'

  constructor(private HttpClient:HttpClient){

   }
   obtenerCliente():Observable<Cliente[]>{
    return this.HttpClient.get<Cliente[]>(`${this.URLbase + 'cliente/obtener'}`);
   }


   registrarCliente(cli:Cliente):Observable<Object>{
    return this.HttpClient.post(`${this.URLbase + 'cliente/insertar'}`,cli)
   }
   actualizarCliente(id:number, cli:Cliente):Observable<Object>{
    return this.HttpClient.put(`${this.URLbase + 'cliente/modificar'}/${id}`,cli)
   }

   obtenerClienteUnico(id:number):Observable<Cliente>{
    return this.HttpClient.get<Cliente>(`${this.URLbase + 'cliente/obtener'}/${id}`);
   }

   eliminarCliente(id:number):Observable<object>{
    return this.HttpClient.delete(`${this.URLbase + 'cliente/eliminar'}/${id}`);
   }




}
