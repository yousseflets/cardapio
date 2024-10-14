import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCarvaoComponent } from './catalogo-carvao.component';

describe('CatalogoCarvaoComponent', () => {
  let component: CatalogoCarvaoComponent;
  let fixture: ComponentFixture<CatalogoCarvaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoCarvaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoCarvaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
