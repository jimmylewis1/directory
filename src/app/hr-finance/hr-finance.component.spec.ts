import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFinanceComponent } from './hr-finance.component';

describe('HrFinanceComponent', () => {
  let component: HrFinanceComponent;
  let fixture: ComponentFixture<HrFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
