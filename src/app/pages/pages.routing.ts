import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { JugadoresRoutes } from './jugadores/jugadores.routing';

import { JugadoresCoincidentesComponent } from './jugadores-coincidentes/jugadores-coincidentes.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: 'principal',
        component: PagesComponent,
        children: [
            { path: 'jugadoreslista', component: JugadoresComponent, children: JugadoresRoutes },
            { path: 'jugadorescoincidentes', component: JugadoresCoincidentesComponent },
            { path: '', redirectTo: 'jugadorescoincidentes', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class PagesRoutingModule { }