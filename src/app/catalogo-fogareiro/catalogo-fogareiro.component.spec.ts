import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoFogareiroComponent } from './catalogo-fogareiro.component';

describe('CatalogoFogareiroComponent', () => {
  let component: CatalogoFogareiroComponent;
  let fixture: ComponentFixture<CatalogoFogareiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoFogareiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoFogareiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
