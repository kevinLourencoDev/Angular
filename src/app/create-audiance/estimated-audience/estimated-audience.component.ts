import {Component, Input, OnInit} from '@angular/core';

const interestAudienceValues = {
  'Dog': 1200000,
  'Cat': 900000,
  'Rabbit': 400000,
  'Painting': 400000,
  'Piano': 600000,
  'Startup': 900000,
  'Industry': 1200000,
  'CAC 40': 800000,
  'Canon': 1400000,
  'Nikon': 800000,
  'Dress': 2000000,
  'Bag': 100000,
  'Sunglasses': 700000,
  'Altera': 50000,
  'Xilinx': 400000,
  'ARM': 200000,
}

@Component({
  selector: 'app-estimated-audience',
  templateUrl: './estimated-audience.component.html',
  styleUrls: ['./estimated-audience.component.scss']
})

export class EstimatedAudienceComponent implements OnInit {

  audienceNumberMin: number;
  audienceNumberMax: number;

  number: number;

  constructor() {
    this.audienceNumberMin = 1000000;
    this.audienceNumberMax = 10000000;
  }

  ngOnInit() {
    this.recalculateEstimated([]);
  }

  recalculateEstimated(interestsAudience) {
    let number = 0;

    if (interestsAudience.length > 0) {
      interestsAudience.map((interest) => {
        number += interestAudienceValues[interest];
      });
    } else {
      number = 0;
    }

    this.number = number;
  }
}
