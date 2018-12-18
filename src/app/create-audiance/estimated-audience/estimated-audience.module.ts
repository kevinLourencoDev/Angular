import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmountConverterPipe } from '../../pipes/amount-converter.pipe';
import { BoxModule } from '../../box/box.module';

import { EstimatedAudienceComponent } from './estimated-audience.component';
import { CursorSliderModule } from '../../cursor-slider/cursor-slider.module';

@NgModule({
  declarations: [
    EstimatedAudienceComponent,
    AmountConverterPipe
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
