import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaysComponent } from './my-pays.component';

describe('MyPaysComponent', () => {
  let component: MyPaysComponent;
  let fixture: ComponentFixture<MyPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
