import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosheroesComponent } from './datosheroes.component';

describe('DatosheroesComponent', () => {
  let component: DatosheroesComponent;
  let fixture: ComponentFixture<DatosheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosheroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
