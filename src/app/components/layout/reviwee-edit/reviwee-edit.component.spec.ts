import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviweeEditComponent } from './reviwee-edit.component';

describe('ReviweeEditComponent', () => {
  let component: ReviweeEditComponent;
  let fixture: ComponentFixture<ReviweeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviweeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviweeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
