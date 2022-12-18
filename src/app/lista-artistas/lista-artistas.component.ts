import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Artistas } from '../artistas';
import { ArtistasService } from '../artistas.service';


@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.css']
})
export class ListaArtistasComponent implements OnInit{

  listaArtista:Artistas[];
  constructor(private artservi:ArtistasService,private  router:Router){ }


  ngOnInit(): void { 
    this.ejecutarServicioObtener();

  }

  private ejecutarServicioObtener(){
    this.artservi.ObtenerArtista().subscribe(dato =>{
      this.listaArtista=dato
    }
    )
  }

  actualizarArtista(idmusico:number){
    this.router.navigate(['./modificare',idmusico]);
  }

  eliminarArtista(idmusico:number){
    this.artservi.eliminarArtista(idmusico).subscribe(dato => {
      this.ejecutarServicioObtener();
    });
    
  }

}
