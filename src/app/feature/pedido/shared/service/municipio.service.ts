import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Municipio } from '../model/Municipio';

@Injectable()
export class MunicipioService {

  private readonly PATH_BASE = "municipio";

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Municipio[]>(`${environment.endpoint}${this.PATH_BASE}`, this.http.optsName('consultar municipio'));
  }
}
