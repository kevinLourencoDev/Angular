import { TestBed } from '@angular/core/testing';

import { TreeSelectServiceService } from './tree-select-service.service';

describe('TreeSelectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeSelectServiceService = TestBed.get(TreeSelectServiceService);
    expect(service).toBeTruthy();
  });
});
