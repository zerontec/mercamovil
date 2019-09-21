import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySucssComponent } from './pay-sucss.component';

describe('PaySucssComponent', () => {
  let component: PaySucssComponent;
  let fixture: ComponentFixture<PaySucssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySucssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySucssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
