import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDireComponent } from './profile-dire.component';

describe('ProfileDireComponent', () => {
  let component: ProfileDireComponent;
  let fixture: ComponentFixture<ProfileDireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
