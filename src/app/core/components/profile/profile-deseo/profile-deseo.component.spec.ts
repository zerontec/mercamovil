import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeseoComponent } from './profile-deseo.component';

describe('ProfileDeseoComponent', () => {
  let component: ProfileDeseoComponent;
  let fixture: ComponentFixture<ProfileDeseoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDeseoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
