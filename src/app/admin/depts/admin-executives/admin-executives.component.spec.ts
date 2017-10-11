import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExecutivesComponent } from './admin-executives.component';

describe('AdminExecutivesComponent', () => {
  let component: AdminExecutivesComponent;
  let fixture: ComponentFixture<AdminExecutivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExecutivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExecutivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
