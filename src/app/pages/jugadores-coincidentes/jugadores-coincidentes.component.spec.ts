import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresCoincidentesComponent } from './jugadores-coincidentes.component';

describe('JugadoresCoincidentesComponent', () => {
  let component: JugadoresCoincidentesComponent;
  let fixture: ComponentFixture<JugadoresCoincidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadoresCoincidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresCoincidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
