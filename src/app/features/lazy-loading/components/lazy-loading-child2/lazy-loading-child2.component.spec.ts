import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingChild2Component } from './lazy-loading-child2.component';

describe('LazyLoadingChild2Component', () => {
  let component: LazyLoadingChild2Component;
  let fixture: ComponentFixture<LazyLoadingChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
