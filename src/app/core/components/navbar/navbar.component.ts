import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { SeguridadService } from '@core/services/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`:host {
    border: 0 solid #e1e1e1;
    border-bottom-width: 1px;
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  nav a {
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }

  nav a.router-link-active {
    color: #106cc8;
  }`],
})
export class NavbarComponent implements OnInit {

  @Input()
  items: MenuItem[];

  constructor(protected seguridadService: SeguridadService) { }

  ngOnInit() {
  }

  public estaAutenticado(): boolean {
    return this.seguridadService.estaAutenticado();
  }

  public cerrarSesion():void{
    this.seguridadService.cerrarSesion();
  }
}
