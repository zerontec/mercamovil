import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecUserComponent } from './direc-user.component';

describe('DirecUserComponent', () => {
  let component: DirecUserComponent;
  let fixture: ComponentFixture<DirecUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
