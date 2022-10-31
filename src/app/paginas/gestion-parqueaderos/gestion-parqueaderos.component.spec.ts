import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionParqueaderosComponent } from './gestion-parqueaderos.component';

describe('GestionParqueaderosComponent', () => {
  let component: GestionParqueaderosComponent;
  let fixture: ComponentFixture<GestionParqueaderosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionParqueaderosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionParqueaderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
