import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCarritoComponent } from './profile-carrito.component';

describe('ProfileCarritoComponent', () => {
  let component: ProfileCarritoComponent;
  let fixture: ComponentFixture<ProfileCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
