import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-jugadores-coincidentes',
  templateUrl: './jugadores-coincidentes.component.html',
  styleUrls: ['./jugadores-coincidentes.component.sass']
})
export class JugadoresCoincidentesComponent implements OnInit {
  public jugadores: any = [];
  private nbaJugadores: any = [];
  public pulgadaInput = '';
  public showData = false;

  constructor(
    private nbaRest: NbaService
  ) { }

  ngOnInit(): void {
    this.nbaRest.getJugadores().subscribe(
      (resp) => {
        this.nbaJugadores = resp.values;
      },
      (err) => {
        this.showErrorMsg();
      }
    );
  }

  async buscarCoincidencia() {
    const nJugadores = this.nbaJugadores.length;
    
    if (nJugadores === 0) {
      this.showErrorMsg();
      return;
    }
    
    const pulgadas = parseInt(this.pulgadaInput);
    
    this.jugadores = [];
    let nbaJugadoresCopy = [...this.nbaJugadores];

    this.nbaJugadores.forEach((nba: any) => {
      const ntofind = pulgadas - parseInt(nba.h_in);

      nbaJugadoresCopy.filter((element: any) => {
        if ( element.h_in == ntofind && element.first_name != nba.first_name ) {
          this.jugadores.push( { dato1: nba, dato2: element } );
        };
      });
      
      nbaJugadoresCopy.shift();
    });
      
    this.showData = true;

  }

  showErrorMsg() {
    alert('Hubo un error y no se pudo recargar los jugadores de la NBA, vuelva a cargar la página');
  }
}
