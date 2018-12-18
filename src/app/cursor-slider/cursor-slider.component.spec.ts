import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorSliderComponent } from './cursor-slider.component';

describe('NumberSliderComponent', () => {
  let component: CursorSliderComponent;
  let fixture: ComponentFixture<CursorSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursorSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
