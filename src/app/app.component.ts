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
    { url: '/home', nombre: 'home', autenticado: true, noAutenticado: true },
    { url: '/pedido/detalle', nombre: 'Seguimiento pedido', autenticado: true, noAutenticado: true  },
    { url: '/pedido/crear', nombre: 'crear pedido', autenticado: true, noAutenticado: false  },
    { url: '/pedido', nombre: 'ver Pedidos', autenticado: true, noAutenticado: false  },
    { url: '/login', nombre: 'login', autenticado: false, noAutenticado: true  }
  ];
}
