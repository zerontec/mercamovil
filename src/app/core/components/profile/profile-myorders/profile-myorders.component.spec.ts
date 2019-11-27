import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyordersComponent } from './profile-myorders.component';

describe('ProfileMyordersComponent', () => {
  let component: ProfileMyordersComponent;
  let fixture: ComponentFixture<ProfileMyordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMyordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
