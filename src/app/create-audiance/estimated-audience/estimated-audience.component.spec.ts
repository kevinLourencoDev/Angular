import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatNumberPipe } from '../../pipes/format-number.pipe';

import { BoxModule } from '../../box/box.module';
import { CursorSliderModule } from '../../cursor-slider/cursor-slider.module';

import { EstimatedAudienceComponent } from './estimated-audience.component';
import {CommonModule} from '@angular/common';

describe('EstimatedAudienceComponent', () => {
  let component: EstimatedAudienceComponent;
  let fixture: ComponentFixture<EstimatedAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EstimatedAudienceComponent,
        FormatNumberPipe
      ],
      imports: [
        CommonModule,
        BoxModule,
        CursorSliderModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
