import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaComponent } from './admin-pa.component';

describe('AdminPaComponent', () => {
  let component: AdminPaComponent;
  let fixture: ComponentFixture<AdminPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
