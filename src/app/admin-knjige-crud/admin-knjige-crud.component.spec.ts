import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKnjigeCrudComponent } from './admin-knjige-crud.component';

describe('AdminKnjigeCrudComponent', () => {
  let component: AdminKnjigeCrudComponent;
  let fixture: ComponentFixture<AdminKnjigeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKnjigeCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminKnjigeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
