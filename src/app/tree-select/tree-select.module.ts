import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule, MatIconModule, MatButtonModule, MatSelectModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';

import { ChipsListComponent } from './chips-list/chips-list.component';
import { TreeSelectComponent } from './tree-select.component';
import {BoxModule} from '../box/box.module';

@NgModule({
  declarations: [TreeSelectComponent, ChipsListComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    BoxModule
  ],
  exports: [
    TreeSelectComponent
  ]
})
export class TreeSelectModule { }
