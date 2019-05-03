import {TestBed, async, inject} from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, 
         HttpTestingController} from '@angular/common/http/testing';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {

  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
    service = TestBed.get(CustomerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
