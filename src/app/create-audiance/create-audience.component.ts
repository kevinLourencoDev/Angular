import {Component, OnInit, ViewChild} from '@angular/core';
import { EstimatedAudienceComponent } from './estimated-audience/estimated-audience.component';

@Component({
  selector: 'app-create-audiance',
  templateUrl: './create-audience.component.html',
  styleUrls: ['./create-audience.component.scss']
})

export class CreateAudienceComponent implements OnInit {

  @ViewChild(EstimatedAudienceComponent) estimatedAudienceComponent: EstimatedAudienceComponent ;

  constructor() {
  }

  ngOnInit() {
  }

  sendInterestsToEstimatedAudience($event: string[]) {
    this.estimatedAudienceComponent.recalculateEstimated($event);
  }
}
