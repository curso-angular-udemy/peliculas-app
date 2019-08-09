import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadriculaComponent } from './cuadricula.component';

describe('CuadriculaComponent', () => {
  let component: CuadriculaComponent;
  let fixture: ComponentFixture<CuadriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
