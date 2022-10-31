import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaComponent } from './edit-pa.component';

describe('EditPaComponent', () => {
  let component: EditPaComponent;
  let fixture: ComponentFixture<EditPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
