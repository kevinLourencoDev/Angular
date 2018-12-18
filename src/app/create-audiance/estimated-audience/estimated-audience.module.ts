import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BoxModule} from '../../box/box.module';

import {EstimatedAudienceComponent} from './estimated-audience.component';
import { AmountConverterPipe } from '../../pipes/amount-converter.pipe';

@NgModule({
  declarations: [EstimatedAudienceComponent, AmountConverterPipe],
  imports: [
    CommonModule,
    BoxModule
  ],
  exports: [
    EstimatedAudienceComponent
  ]
})
export class EstimatedAudienceModule { }
