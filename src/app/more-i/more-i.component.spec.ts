import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIComponent } from './more-i.component';

describe('MoreIComponent', () => {
  let component: MoreIComponent;
  let fixture: ComponentFixture<MoreIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
