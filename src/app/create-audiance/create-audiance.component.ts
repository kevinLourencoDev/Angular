import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-audiance',
  templateUrl: './create-audiance.component.html',
  styleUrls: ['./create-audiance.component.scss']
})
export class CreateAudianceComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
