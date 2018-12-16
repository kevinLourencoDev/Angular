import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from './form/form.module';

import { CreateAudianceComponent } from './create-audiance.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import {EstimatedAudienceModule} from './estimated-audience/estimated-audience.module';

@NgModule({
  declarations: [
    CreateAudianceComponent,
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    EstimatedAudienceModule
  ],
  exports: [
    CreateAudianceComponent,
  ]
})
export class CreateAudianceModule { }
