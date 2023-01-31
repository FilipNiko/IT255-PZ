import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaMalaComponent } from './knjiga-mala.component';

describe('KnjigaMalaComponent', () => {
  let component: KnjigaMalaComponent;
  let fixture: ComponentFixture<KnjigaMalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnjigaMalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnjigaMalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
