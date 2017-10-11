import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCsmComponent } from './admin-csm.component';

describe('AdminCsmComponent', () => {
  let component: AdminCsmComponent;
  let fixture: ComponentFixture<AdminCsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
