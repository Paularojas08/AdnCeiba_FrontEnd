import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Respuesta } from '@core/modelo/Respuesta';
import { environment } from 'src/environments/environment';
import { Pedido } from '../model/pedido';

@Injectable()
export class PedidoService {

  private readonly PATH_BASE = "pedido";

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pedido[]>(`${environment.endpoint}${this.PATH_BASE}`, this.http.optsName('consultar pedidos'));
  }

  public crear(solicitudPedido) {
    return this.http.doPost<Pedido, Respuesta<number>>(`${environment.endpoint}${this.PATH_BASE}`, solicitudPedido, this.http.optsName('crear/crear pedido'));  
  }

  public eliminar(id: number) {
    return this.http.doDelete<any>(`${environment.endpoint}${this.PATH_BASE}/${id}`, this.http.optsName('eliminar/eliminar pedido'));  
  }

  public consultarDetallePorIdSeguimiento(seguimientoId: string) {
    return this.http.doGet<Pedido>(`${environment.endpoint}${this.PATH_BASE}/${seguimientoId}`, this.http.optsName('consultar seguimiento id'));
  }
}
