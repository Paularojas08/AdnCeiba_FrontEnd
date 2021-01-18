import { NgModule } from '@angular/core';

import { PedidoRoutingModule } from './pedido-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListarDetallePedidoComponent } from '@pedido/components/listar-detalle-pedido/listar-detalle-pedido.component';
import { PedidoService } from './shared/service/pedido.service';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { MunicipioService } from './shared/service/municipio.service';
import { ProductoService } from './shared/service/producto.service';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';

@NgModule({
  declarations: [
    ListarDetallePedidoComponent,
    CrearPedidoComponent,
    ListarPedidoComponent
  ],
  imports: [
    PedidoRoutingModule,
    SharedModule
  ],
  providers: [PedidoService, MunicipioService, ProductoService]
})
export class PedidoModule { }
