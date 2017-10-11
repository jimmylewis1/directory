import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHrFinanceComponent } from './admin-hr-finance.component';

describe('AdminHrFinanceComponent', () => {
  let component: AdminHrFinanceComponent;
  let fixture: ComponentFixture<AdminHrFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHrFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHrFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
