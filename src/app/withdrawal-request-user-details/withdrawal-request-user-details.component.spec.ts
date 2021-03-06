import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalRequestUserDetailsComponent } from './withdrawal-request-user-details.component';

describe('WithdrawalRequestUserDetailsComponent', () => {
  let component: WithdrawalRequestUserDetailsComponent;
  let fixture: ComponentFixture<WithdrawalRequestUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalRequestUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalRequestUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
