import { TestBed } from '@angular/core/testing';

import { LazyModuleService } from './lazy-module.service';

describe('LazyModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyModuleService = TestBed.get(LazyModuleService);
    expect(service).toBeTruthy();
  });
});
