import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';

  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/pedido/detalle', nombre: 'pedido detalle' },
    { url: '/pedido/crear', nombre: 'crear pedido' },
    { url: '/pedido', nombre: 'ver Pedidos' },
    { url: '/login', nombre: 'login' }
  ];
}
