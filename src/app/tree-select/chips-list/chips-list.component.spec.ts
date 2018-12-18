import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MatChipsModule} from '@angular/material/chips';

import { ChipsListComponent } from './chips-list.component';
import {TodoItemFlatNode, TodoItemNode, TreeSelectComponent} from '../tree-select.component';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule, MatSelectModule, MatTreeFlatDataSource} from '@angular/material';
import {BoxModule} from '../../box/box.module';

import { InterestsService } from '../../create-audiance/interests.service';

describe('ChipsListComponent', () => {
  let component: ChipsListComponent;
  let fixture: ComponentFixture<ChipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectComponent, TodoItemFlatNode, TodoItemNode, TreeSelectComponent, ChipsListComponent ],
      imports: [
        CommonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatChipsModule,
        BoxModule,
      ],
      providers: [
        InterestsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
