import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiEmailComponent } from './verifi-email.component';

describe('VerifiEmailComponent', () => {
  let component: VerifiEmailComponent;
  let fixture: ComponentFixture<VerifiEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
