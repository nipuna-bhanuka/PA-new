import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPAComponent } from './view-pa.component';

describe('ViewPAComponent', () => {
  let component: ViewPAComponent;
  let fixture: ComponentFixture<ViewPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
