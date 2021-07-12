import { Routes, RouterModule } from '@angular/router';

import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { JugadorComponent } from './jugador/jugador.component';

export const JugadoresRoutes: Routes = [
    {
        path: '',
        component: ListaJugadoresComponent
    },
    {
        path: 'jugador/:nombre/:apellido',
        component: JugadorComponent
    },
    {
        path: '**',
        redirectTo: 'principal/jugadoreslista'
    }
];
