import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material';

import { TreeSelectModule } from '../../tree-select/tree-select.module';
import {MatSelectModule} from '@angular/material/select';

import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    TreeSelectModule
  ],
  exports: [
    FormComponent,
  ]
})
export class FormModule { }
