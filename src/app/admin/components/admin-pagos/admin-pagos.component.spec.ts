import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagosComponent } from './admin-pagos.component';

describe('AdminPagosComponent', () => {
  let component: AdminPagosComponent;
  let fixture: ComponentFixture<AdminPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
