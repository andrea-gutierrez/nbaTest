import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { JugadoresModule } from './jugadores/jugadores.module';

import { JugadoresCoincidentesComponent } from './jugadores-coincidentes/jugadores-coincidentes.component';
// import { ListaJugadoresComponent } from './jugadores/lista-jugadores/lista-jugadores.component';
// import { JugadorComponent } from './jugadores/jugador/jugador.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    JugadoresCoincidentesComponent,
    // ListaJugadoresComponent,
    // JugadorComponent,
    PagesComponent,
  ],
  imports: [
    JugadoresModule,
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ]
})
export class PagesModule { }
