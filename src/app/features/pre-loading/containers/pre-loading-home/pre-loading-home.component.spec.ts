import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreLoadingHomeComponent } from './pre-loading-home.component';

describe('PreLoadingHomeComponent', () => {
  let component: PreLoadingHomeComponent;
  let fixture: ComponentFixture<PreLoadingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLoadingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoadingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
