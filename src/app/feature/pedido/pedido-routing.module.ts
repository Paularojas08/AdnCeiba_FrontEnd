import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarDetallePedidoComponent } from '@pedido/components/listar-detalle-pedido/listar-detalle-pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';


const routes: Routes = [
  {
    path: '',
    component: ListarPedidoComponent
  },
  {
    path: 'detalle',
    component: ListarDetallePedidoComponent
  },
  {
    path: 'crear',
    component: CrearPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
