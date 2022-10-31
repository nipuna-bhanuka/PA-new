import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviwerEditComponent } from './reviwer-edit.component';

describe('ReviwerEditComponent', () => {
  let component: ReviwerEditComponent;
  let fixture: ComponentFixture<ReviwerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviwerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviwerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
