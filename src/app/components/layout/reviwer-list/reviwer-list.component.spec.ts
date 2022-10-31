import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviwerListComponent } from './reviwer-list.component';

describe('ReviwerListComponent', () => {
  let component: ReviwerListComponent;
  let fixture: ComponentFixture<ReviwerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviwerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviwerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
