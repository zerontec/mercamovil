import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFormComponent } from './pay-form.component';

describe('PayFormComponent', () => {
  let component: PayFormComponent;
  let fixture: ComponentFixture<PayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
