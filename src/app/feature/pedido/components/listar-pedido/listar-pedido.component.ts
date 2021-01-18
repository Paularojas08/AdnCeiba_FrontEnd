import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '@pedido/shared/model/pedido';
import { PedidoService } from '@pedido/shared/service/pedido.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  public listaPedidos: Observable<Pedido[]>;

  constructor(protected pedidoService: PedidoService) { }

  ngOnInit() {
    this.listaPedidos = this.pedidoService.consultar();
  }

  public eliminar(pedidoId: number): void {
    this.pedidoService.eliminar(pedidoId).subscribe(() => {
      this.listaPedidos = this.pedidoService.consultar();
    });
  }
}
