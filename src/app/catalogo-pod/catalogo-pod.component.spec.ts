import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPodComponent } from './catalogo-pod.component';

describe('CatalogoPodComponent', () => {
  let component: CatalogoPodComponent;
  let fixture: ComponentFixture<CatalogoPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoPodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
