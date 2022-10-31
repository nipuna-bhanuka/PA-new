import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcriteriaComponent } from './edit-subcriteria.component';

describe('EditSubcriteriaComponent', () => {
  let component: EditSubcriteriaComponent;
  let fixture: ComponentFixture<EditSubcriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubcriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
