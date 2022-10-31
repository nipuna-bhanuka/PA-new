import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePAComponent } from './create-pa.component';

describe('CreatePAComponent', () => {
  let component: CreatePAComponent;
  let fixture: ComponentFixture<CreatePAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
