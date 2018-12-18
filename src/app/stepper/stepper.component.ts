import {Component, OnInit, ViewChild, TemplateRef, ContentChild} from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  isLinear: boolean;
  stepsOptions: object;
  @ViewChild('stepper') stepper: MatStepper;
  @ContentChild(TemplateRef) templateRef: TemplateRef<object>;

  constructor() {

    this.isLinear = true;

    this.stepsOptions = {
      selectedDefaultStep: 2,
      steps: [
        {
          name: 'Objective',
          completed: true,
        }, {
          name: 'Audience',
          completed: false
        }, {
          name: 'Parameters',
          completed: false
        }, {
          name: 'Launch',
          completed: false,
        },
      ]
    };
  }

  ngOnInit() {
    this.stepper.selectedIndex = 1;
  }
}
