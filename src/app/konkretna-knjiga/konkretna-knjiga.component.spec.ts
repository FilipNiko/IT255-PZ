import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonkretnaKnjigaComponent } from './konkretna-knjiga.component';

describe('KonkretnaKnjigaComponent', () => {
  let component: KonkretnaKnjigaComponent;
  let fixture: ComponentFixture<KonkretnaKnjigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonkretnaKnjigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonkretnaKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
