import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  // { path: '', redirectTo: 'principal/jugadorescoincidentes', pathMatch: 'full' },
  { path: '**', redirectTo: 'principal/jugadorescoincidentes' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
