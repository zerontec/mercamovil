import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSingleComponent } from './button-single.component';

describe('ButtonSingleComponent', () => {
  let component: ButtonSingleComponent;
  let fixture: ComponentFixture<ButtonSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
