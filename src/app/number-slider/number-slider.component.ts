import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.scss']
})
export class NumberSliderComponent implements OnInit {

  @Input() number: number;
  @Input() min: number;
  @Input() max: number;

  constructor() { }

  ngOnInit() {
  }

}
