import { Component, OnInit } from '@angular/core';
import { Pedido } from '@pedido/shared/model/pedido';
import { PedidoService } from '@pedido/shared/service/pedido.service';

@Component({
  selector: 'app-listar-detalle-pedido',
  templateUrl: './listar-detalle-pedido.component.html',
  styleUrls: ['./listar-detalle-pedido.component.css']
})
export class ListarDetallePedidoComponent implements OnInit {

  public pedido: Pedido;
  public numeroSeguimiento: string;
  public verDetalle = false;

  constructor(protected pedidoService: PedidoService) { }

  ngOnInit() {}

  public ver() {
    this.pedidoService.consultarDetallePorIdSeguimiento(this.numeroSeguimiento).subscribe(
      response => this.cargarDetalle(response)
    );
  }

  private cargarDetalle(response): void {
    this.pedido = response;
    this.verDetalle = true;
  }

}
