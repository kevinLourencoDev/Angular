import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  excludesTime: object;

  constructor() {
    this.excludesTime = [
      {value: '30', viewValue: '30'},
      {value: '60', viewValue: '60'},
      {value: '90', viewValue: '90'}
    ];
  }

  ngOnInit() {
  }
}
