import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArtistasComponent } from './lista-artistas/lista-artistas.component';
import { GuardarArtistaComponent } from './guardar-artista/guardar-artista.component';
import { ModificarArtistaComponent } from './modificar-artista/modificar-artista.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { GuardarClienteComponent } from './guardar-cliente/guardar-cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

const routes: Routes = [
  {path:'listarArt',component:ListaArtistasComponent},
  {path:'', redirectTo:'listarArt',pathMatch:'full'},
  {path:'guardare',component:GuardarArtistaComponent},
  {path:'modificare/:id',component:ModificarArtistaComponent},
  {path:"Listar",component:ListaClienteComponent,pathMatch:"full"},
  {path:"",redirectTo:"Listar",pathMatch:"full"},
  {path:"Guardar",component:GuardarClienteComponent,pathMatch:"full"},
  {path:"Modificar/:id",component:ModificarClienteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
