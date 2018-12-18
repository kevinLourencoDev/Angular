import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

const treeData = {
  'Animals & Pet Supplies': [
    'Dog',
    'Cat',
    'Rabbit',
  ],
  'Arts & Entertainment': [
    'Painting',
    'Piano',
  ],
  'Business & Industrial': [
    'Startup',
    'Industry',
    'CAC 40'
  ],
  'Cameras & Optics': [
    'Canon',
    'Nikon',
  ],
  'Apparel et Accessories': [
    'Dress',
    'Bag',
    'Sunglasses'
  ],
  'Electronics': [
    'Altera',
    'Xilinx',
    'ARM',
  ]
};

@Injectable({
  providedIn: 'root'
})

export class InterestsService {

  constructor() { }

  getAudiencesInterestsValues() {
    return {
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
    };
  }
}

export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(treeData, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}
