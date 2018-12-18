import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.scss'],
})
export class ChipsListComponent implements OnInit {

  @Input() interests: string[];
  @Output() removeInterest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(interest: string): void {
      // We going to say to parent that there is a change
      this.removeInterest.emit(interest);
  }

}
