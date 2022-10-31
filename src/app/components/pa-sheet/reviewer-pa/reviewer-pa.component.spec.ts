import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerPaComponent } from './reviewer-pa.component';

describe('ReviewerPaComponent', () => {
  let component: ReviewerPaComponent;
  let fixture: ComponentFixture<ReviewerPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
