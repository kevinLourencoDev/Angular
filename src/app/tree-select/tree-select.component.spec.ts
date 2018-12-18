import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {TodoItemFlatNode, TodoItemNode, TreeSelectComponent} from './tree-select.component';
import {MatTreeFlatDataSource} from '@angular/material';

describe('TreeComponent', () => {
  let component: TreeSelectComponent;
  let fixture: ComponentFixture<TreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectComponent, TodoItemFlatNode, TodoItemNode, TreeSelectComponent ],
      imports: [MatTreeFlatDataSource],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
