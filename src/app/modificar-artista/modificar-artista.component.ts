import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artistas } from '../artistas';
import { ArtistasService } from '../artistas.service';

@Component({
  selector: 'app-modificar-artista',
  templateUrl: './modificar-artista.component.html',
  styleUrls: ['./modificar-artista.component.css']
})
export class ModificarArtistaComponent implements OnInit    {
 
  id:number
  art:Artistas;
  constructor(private artservi:ArtistasService,private route:Router , private routes:ActivatedRoute){ }

  ngOnInit(): void{
    this.id = this.routes.snapshot.params['id']
    this.artservi.obtenerArtistaUnico(this.id).subscribe(dato =>{
      this.art = dato;
    })
       
  }
  irListaArtistas(){
    this.route.navigate(["./listarArt"])
  }



  OnSubmit(){
    this.artservi.actualizarArtista(this.id,this.art).subscribe(dato =>{
      this.irListaArtistas();

    })
    
  }

}
