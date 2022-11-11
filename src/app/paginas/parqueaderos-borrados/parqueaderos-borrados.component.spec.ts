import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueaderosBorradosComponent } from './parqueaderos-borrados.component';

describe('ParqueaderosBorradosComponent', () => {
  let component: ParqueaderosBorradosComponent;
  let fixture: ComponentFixture<ParqueaderosBorradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueaderosBorradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueaderosBorradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
