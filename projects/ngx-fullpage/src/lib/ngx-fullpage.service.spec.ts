import { TestBed } from '@angular/core/testing';

import { NgxFullpageService } from './ngx-fullpage.service';

describe('NgxFullpageService', () => {
  let service: NgxFullpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFullpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
