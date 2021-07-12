import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.sass']
})
export class ListaJugadoresComponent implements OnInit {
  public nbaJugadores: any;

  constructor(
    private nbaRest: NbaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nbaRest.getJugadores().subscribe(
      (resp) => {
        this.nbaJugadores = resp.values;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  showDetail(index: number): void {
    const nombre = this.nbaJugadores[ index ].first_name;
    const apellido = this.nbaJugadores[ index ].last_name;
    this.router.navigate( ['/principal/jugadoreslista/jugador', nombre, apellido ] );
  }

  orderBy( columnn: string ): void {
    this.nbaJugadores.sort( this.compareValues( columnn ) );
  }

  compareValues( key: any, order = 'asc' ) {
    return function innerSort(a: string, b: string) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

}
