import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmsComponent } from './csms.component';

describe('CsmsComponent', () => {
  let component: CsmsComponent;
  let fixture: ComponentFixture<CsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
