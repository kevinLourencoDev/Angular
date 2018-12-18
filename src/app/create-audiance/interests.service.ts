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
      'Dog': 12000000,
      'Cat': 9000000,
      'Rabbit': 4000000,
      'Painting': 4000000,
      'Piano': 6000000,
      'Startup': 9000000,
      'Industry': 12000000,
      'CAC 40': 8000000,
      'Canon': 1400000,
      'Nikon': 8000000,
      'Dress': 20000000,
      'Bag': 1000000,
      'Sunglasses': 7000000,
      'Altera': 500000,
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
