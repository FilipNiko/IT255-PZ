import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKnjigaMalaComponent } from './admin-knjiga-mala.component';

describe('AdminKnjigaMalaComponent', () => {
  let component: AdminKnjigaMalaComponent;
  let fixture: ComponentFixture<AdminKnjigaMalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKnjigaMalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminKnjigaMalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
