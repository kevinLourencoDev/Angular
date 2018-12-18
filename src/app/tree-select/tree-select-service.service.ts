import { Injectable } from '@angular/core';
import {TodoItemFlatNode, TodoItemNode} from './tree-select.component';

@Injectable({
  providedIn: 'root'
})
export class TreeSelectServiceService {

  constructor() { }

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  selectChildes(descendants) {
    this.checklistSelection.select(...descendants);
    descendants.map((child) => this.addInterestIfNotExist(child.item));
  }

  deselectChildes(descendants) {
    this.checklistSelection.deselect(...descendants);

    descendants.map((child) => this.removeInterestIfExist(child.item));
  }

  addInterestIfNotExist(item) {
    if (this.interests.indexOf(item) === -1) {
      this.interests.push(item);
    }
  }

  removeInterestIfExist(item) {
    const index = this.interests.indexOf(item);

    if (index !== -1) {
      this.interests.splice(index,  1);
    }
  }

  toggleItemFromInterests(item) {
    // If this element is yet on array we going to remove it
    if (this.interests.indexOf(item) !== -1) {
      this.removeInterestIfExist(item);
    } else {
      this.addInterestIfNotExist(item);
    }
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.selectChildes(descendants)
      : this.deselectChildes(descendants) ;

    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.toggleItemFromInterests(node.item);
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }

    this.changeInterests.emit(this.interests);
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  // For Chips code
  removeInterestChips(interest) {
    const node = this.getInterestToRemoveInTreeData(interest);

    this.todoLeafItemSelectionToggle(node);
  }

  getInterestToRemoveInTreeData(interest) {
    const dataNodes = this.treeControl.dataNodes;

    return dataNodes.find((node) => node.item === interest);
  }
}
