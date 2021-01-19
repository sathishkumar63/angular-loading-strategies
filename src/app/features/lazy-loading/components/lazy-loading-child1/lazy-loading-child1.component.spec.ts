import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadingChild1Component } from './lazy-loading-child1.component';

describe('LazyLoadingChild1Component', () => {
  let component: LazyLoadingChild1Component;
  let fixture: ComponentFixture<LazyLoadingChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
