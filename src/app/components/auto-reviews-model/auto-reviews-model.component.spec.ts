import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoReviewsModelComponent } from './auto-reviews-model.component';

describe('AutoReviewsModelComponent', () => {
  let component: AutoReviewsModelComponent;
  let fixture: ComponentFixture<AutoReviewsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoReviewsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoReviewsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
