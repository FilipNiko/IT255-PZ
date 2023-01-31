import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorudzbinaDetaljiComponent } from './admin-porudzbina-detalji.component';

describe('AdminPorudzbinaDetaljiComponent', () => {
  let component: AdminPorudzbinaDetaljiComponent;
  let fixture: ComponentFixture<AdminPorudzbinaDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorudzbinaDetaljiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorudzbinaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
