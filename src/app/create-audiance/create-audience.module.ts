import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from './form/form.module';

import { CreateAudienceComponent } from './create-audience.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import {EstimatedAudienceModule} from './estimated-audience/estimated-audience.module';

@NgModule({
  declarations: [
    CreateAudienceComponent,
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    EstimatedAudienceModule,
  ],
  exports: [
    CreateAudienceComponent,
  ]
})
export class CreateAudienceModule { }
