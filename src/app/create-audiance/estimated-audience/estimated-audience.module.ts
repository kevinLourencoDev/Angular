import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BoxModule} from '../../box/box.module';
import {EstimatedAudienceComponent} from './estimated-audience.component';

@NgModule({
  declarations: [EstimatedAudienceComponent],
  imports: [
    CommonModule,
    BoxModule
  ],
  exports: [
    EstimatedAudienceComponent
  ]
})
export class EstimatedAudienceModule { }
