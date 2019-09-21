import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesViewComponent } from './pages-view.component';

describe('PagesViewComponent', () => {
  let component: PagesViewComponent;
  let fixture: ComponentFixture<PagesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
