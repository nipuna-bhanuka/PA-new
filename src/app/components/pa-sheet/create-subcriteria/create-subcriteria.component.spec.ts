import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubcriteriaComponent } from './create-subcriteria.component';

describe('CreateSubcriteriaComponent', () => {
  let component: CreateSubcriteriaComponent;
  let fixture: ComponentFixture<CreateSubcriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubcriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
