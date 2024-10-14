import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEssenciasComponent } from './catalogo-essencias.component';

describe('CatalogoEssenciasComponent', () => {
  let component: CatalogoEssenciasComponent;
  let fixture: ComponentFixture<CatalogoEssenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoEssenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoEssenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
