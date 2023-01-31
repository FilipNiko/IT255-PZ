import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorudzbineKorisnikaComponent } from './admin-porudzbine-korisnika.component';

describe('AdminPorudzbineKorisnikaComponent', () => {
  let component: AdminPorudzbineKorisnikaComponent;
  let fixture: ComponentFixture<AdminPorudzbineKorisnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorudzbineKorisnikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorudzbineKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
