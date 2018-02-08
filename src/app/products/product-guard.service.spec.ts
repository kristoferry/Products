import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { ProductGuardService } from './product-guard.service';

describe('ProductGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGuardService],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([ProductGuardService], (service: ProductGuardService) => {
    expect(service).toBeTruthy();
  }));
});
