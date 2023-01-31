import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonudaKnjigaComponent } from './ponuda-knjiga.component';

describe('PonudaKnjigaComponent', () => {
  let component: PonudaKnjigaComponent;
  let fixture: ComponentFixture<PonudaKnjigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonudaKnjigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonudaKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
