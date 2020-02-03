import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdComponent } from './productd.component';

describe('ProductdComponent', () => {
  let component: ProductdComponent;
  let fixture: ComponentFixture<ProductdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
