import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EagerHomeComponent } from './eager-home.component';

describe('EagerHomeComponent', () => {
  let component: EagerHomeComponent;
  let fixture: ComponentFixture<EagerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
