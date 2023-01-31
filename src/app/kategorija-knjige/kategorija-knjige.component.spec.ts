import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijaKnjigeComponent } from './kategorija-knjige.component';

describe('KategorijaKnjigeComponent', () => {
  let component: KategorijaKnjigeComponent;
  let fixture: ComponentFixture<KategorijaKnjigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorijaKnjigeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategorijaKnjigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
