import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursorSliderComponent } from './cursor-slider.component';

@NgModule({
  declarations: [CursorSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursorSliderComponent
  ]
})
export class CursorSliderModule { }
