import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserperfComponent } from './userperf.component';

describe('UserperfComponent', () => {
  let component: UserperfComponent;
  let fixture: ComponentFixture<UserperfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserperfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserperfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
