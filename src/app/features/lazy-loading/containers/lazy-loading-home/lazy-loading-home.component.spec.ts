import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingHomeComponent } from './lazy-loading-home.component';

describe('LazyLoadingHomeComponent', () => {
  let component: LazyLoadingHomeComponent;
  let fixture: ComponentFixture<LazyLoadingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
