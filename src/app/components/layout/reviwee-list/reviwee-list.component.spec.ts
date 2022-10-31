import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviweeListComponent } from './reviwee-list.component';

describe('ReviweeListComponent', () => {
  let component: ReviweeListComponent;
  let fixture: ComponentFixture<ReviweeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviweeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviweeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
