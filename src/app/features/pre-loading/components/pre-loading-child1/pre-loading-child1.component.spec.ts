import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreLoadingChild1Component } from './pre-loading-child1.component';

describe('PreLoadingChild1Component', () => {
  let component: PreLoadingChild1Component;
  let fixture: ComponentFixture<PreLoadingChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLoadingChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoadingChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
