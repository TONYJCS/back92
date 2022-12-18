import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artistas } from '../artistas';
import { ArtistasService } from '../artistas.service';

@Component({
  selector: 'app-guardar-artista',
  templateUrl: './guardar-artista.component.html',
  styleUrls: ['./guardar-artista.component.css']
})
export class GuardarArtistaComponent implements OnInit {

  art:Artistas = new Artistas();

  constructor(private artservi:ArtistasService,private router:Router){}

  ngOnInit(): void{

  }
  ejecutarguardarartista(){
    this.artservi.registrarArtista(this.art).subscribe(dato =>{
      this.router.navigate(["./listarArt"]);
      console.log(dato);
    })
  }
  OnSubmit(){
    this.ejecutarguardarartista();  
  }

}
