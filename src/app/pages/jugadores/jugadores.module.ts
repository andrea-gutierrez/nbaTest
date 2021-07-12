import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadoresComponent } from './jugadores.component';

@NgModule({
  declarations: [
    ListaJugadoresComponent,
    JugadoresComponent,
    JugadorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ]
})
export class JugadoresModule { }
