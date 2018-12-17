import {Component, OnInit, ViewChild, TemplateRef, ContentChild, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  isLinear = true;
  secondFormGroup: FormGroup;
  stepsOptions: object;
  @ViewChild('stepper') stepper: MatStepper;
  @ContentChild(TemplateRef) templateRef: TemplateRef<object>;

  constructor(private _formBuilder: FormBuilder) {
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
