import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';

@Injectable()
export class SeguridadService {

  constructor(protected http: HttpService) {}
}
