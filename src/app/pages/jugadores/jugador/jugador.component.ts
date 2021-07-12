import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NbaService } from 'src/app/services/nba.service';


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.sass']
})
export class JugadorComponent implements OnInit {
  
  public jugador: any = { first_name: '', last_name: '', h_in: '', h_meters: ''};
  public jugadoresAltura: any;
  private nbaJugadores: any;
  public apellido: any;
  public nombre: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private nbaService: NbaService,
    private route: Router,
  ) {
    this.activatedRouter.params.subscribe( params => {
      this.apellido = params['apellido'];
      this.nombre = params['nombre'];
    });
  }

  ngOnInit(): void {
    this.nbaService.getJugadores().subscribe(
      ( resp ) => {
        this.nbaJugadores = resp.values;
        const index = this.nbaJugadores.findIndex( (obj: any) => {
          return (obj.first_name === this.nombre) && (obj.last_name === this.apellido);
        });

        this.jugador = this.nbaJugadores[index];

        this.jugadoresAltura = this.nbaJugadores.filter( ( obj: any ) => {
          return obj.h_in === this.jugador.h_in;
        });

        this.jugadoresAltura.splice( index, 1 );

      }
    );
  }

  back() {
    this.route.navigateByUrl('/principal/jugadoreslista');
  }

}
