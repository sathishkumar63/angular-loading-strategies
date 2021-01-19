import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoadingChild2Component } from './pre-loading-child2.component';

describe('PreLoadingChild2Component', () => {
  let component: PreLoadingChild2Component;
  let fixture: ComponentFixture<PreLoadingChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLoadingChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoadingChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
