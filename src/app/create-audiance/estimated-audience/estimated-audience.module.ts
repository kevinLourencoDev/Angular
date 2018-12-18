import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatNumberPipe } from '../../pipes/format-number.pipe';

import { BoxModule } from '../../box/box.module';
import { CursorSliderModule } from '../../cursor-slider/cursor-slider.module';

import { EstimatedAudienceComponent } from './estimated-audience.component';


@NgModule({
  declarations: [
    EstimatedAudienceComponent,
    FormatNumberPipe
  ],
  imports: [
    CommonModule,
    BoxModule,
    CursorSliderModule
  ],
  exports: [
    EstimatedAudienceComponent
  ]
})
export class EstimatedAudienceModule { }
