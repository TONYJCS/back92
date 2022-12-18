import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArtistasComponent } from './lista-artistas/lista-artistas.component';
import { HttpClientModule} from '@angular/common/http';
import { GuardarArtistaComponent } from './guardar-artista/guardar-artista.component';
import { FormsModule } from '@angular/forms';
import { ModificarArtistaComponent } from './modificar-artista/modificar-artista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { GuardarClienteComponent } from './guardar-cliente/guardar-cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaArtistasComponent,
    GuardarArtistaComponent,
    ModificarArtistaComponent,
    ListaClienteComponent,
    GuardarClienteComponent,
    ModificarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
