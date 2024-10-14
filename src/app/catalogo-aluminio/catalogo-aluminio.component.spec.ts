import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAluminioComponent } from './catalogo-aluminio.component';

describe('CatalogoAluminioComponent', () => {
  let component: CatalogoAluminioComponent;
  let fixture: ComponentFixture<CatalogoAluminioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoAluminioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoAluminioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
