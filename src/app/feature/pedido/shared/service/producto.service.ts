import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';

@Injectable()
export class ProductoService {

  private readonly PATH_BASE = "producto";

  constructor(protected http: HttpService) {}

  public consultar() { 
    return this.http.doGet<Producto[]>(`${environment.endpoint}${this.PATH_BASE}`, this.http.optsName('consultar productos'));
  }
}
