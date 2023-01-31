import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorudzbineComponent } from './admin-porudzbine.component';

describe('AdminPorudzbineComponent', () => {
  let component: AdminPorudzbineComponent;
  let fixture: ComponentFixture<AdminPorudzbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorudzbineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
