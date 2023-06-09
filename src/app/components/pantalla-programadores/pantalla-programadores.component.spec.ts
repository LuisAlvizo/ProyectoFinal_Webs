import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaProgramadoresComponent } from './pantalla-programadores.component';

describe('PantallaProgramadoresComponent', () => {
  let component: PantallaProgramadoresComponent;
  let fixture: ComponentFixture<PantallaProgramadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaProgramadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaProgramadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
