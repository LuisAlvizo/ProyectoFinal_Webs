import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservacionesComponent } from './ver-reservaciones.component';

describe('VerReservacionesComponent', () => {
  let component: VerReservacionesComponent;
  let fixture: ComponentFixture<VerReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerReservacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
