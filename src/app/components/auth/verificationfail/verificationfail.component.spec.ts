import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationfailComponent } from './verificationfail.component';

describe('VerificationfailComponent', () => {
  let component: VerificationfailComponent;
  let fixture: ComponentFixture<VerificationfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationfailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
