import {Component, Input, OnInit} from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-cursor-slider',
  templateUrl: './cursor-slider.component.html',
  styleUrls: ['./cursor-slider.component.scss']
})
export class CursorSliderComponent implements OnInit {

  @Input() number: number;
  @Input() min: number;
  @Input() max: number;

  constructor() {
  }

  ngOnInit() {
  }

  positionCursor() {
    return `calc(${this.calcPositionCursorPercentage()}% - 5px)`;
  }

  calcPositionCursorPercentage() {
    return ((this.number - this.min ) / (this.max - this.min)) * 100;
  }
}
