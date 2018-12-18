import {Component, OnInit} from '@angular/core';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-estimated-audience',
  templateUrl: './estimated-audience.component.html',
  styleUrls: ['./estimated-audience.component.scss']
})

export class EstimatedAudienceComponent implements OnInit {

  audienceNumberMin: number;
  audienceNumberMax: number;
  number: number;
  interestAudienceValues: object;

  constructor(interestsService: InterestsService) {
    this.audienceNumberMin = 1000000;
    this.audienceNumberMax = 100000000;

    this.interestAudienceValues = interestsService.getAudiencesInterestsValues();
  }

  ngOnInit() {
    this.recalculateEstimated([]);
  }

  recalculateEstimated(interestsAudience) {
    let number = 0;

    if (interestsAudience.length > 0) {
      interestsAudience.map((interest) => {
        number += this.interestAudienceValues[interest];
      });
    } else {
      number = 0;
    }

    this.number = number;
  }
}
