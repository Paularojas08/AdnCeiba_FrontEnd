import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../shared/service/pedido.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Municipio } from '@pedido/shared/model/Municipio';
import { Producto } from '@pedido/shared/model/producto';
import { Observable } from 'rxjs';
import { MunicipioService } from '@pedido/shared/service/municipio.service';
import { ProductoService } from '@pedido/shared/service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {
  public pedidoForm: FormGroup;
  public solicitudPedido: any = {};
  public municipios:  Observable<Municipio[]>;
  public productos:  Observable<Producto[]>;

  public productosAgregados = [];
  public productoSeleccionadoOpcion: string;
  public municipioSeleccionadoOpcion: number;
  public cantidadAgregar: number;

  constructor(protected pedidoServices: PedidoService, protected municipioServices: MunicipioService, protected productoServices: ProductoService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioProducto();
    this.municipios = this.municipioServices.consultar();
    this.productos = this.productoServices.consultar();
  }

  private construirFormularioProducto() {
    this.pedidoForm = new FormGroup({
      nombreCliente: new FormControl('', [Validators.required]),
      cedulaCliente: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    });
  }

  public agregarProducto(): void {
    if(this.cantidadAgregar <= 0) {
      alert('La cantidad debe ser mayor a cero');
      return;
    }

    const productoExiste = this.productosAgregados.find(prod => prod.codigoProducto === this.productoSeleccionadoOpcion);
    if(productoExiste) {
      const index = this.productosAgregados.indexOf(productoExiste);
      productoExiste[index] = {
        cantidad: this.cantidadAgregar,
        codigoProducto: this.productoSeleccionadoOpcion,
      }
      this.limpiarFormAgregarProducto();
      return;
    }

    this.productosAgregados.push({
      cantidad: this.cantidadAgregar,
      codigoProducto: this.productoSeleccionadoOpcion,
    });
    this.limpiarFormAgregarProducto();
  }

  public eliminarProducto(item): void {
    const index = this.productosAgregados.indexOf(item);
    if (index > -1) {
      this.productosAgregados.splice(index, 1);
    }
  }

  limpiarFormAgregarProducto() {
    this.cantidadAgregar = 0;
    this.productoSeleccionadoOpcion = null;
  }

  public crear(): void {
    this.solicitudPedido.solicitudPedidoProductos = this.productosAgregados;
    this.solicitudPedido.idMunicipio = this.municipioSeleccionadoOpcion;
    this.solicitudPedido.nombreCompleto = this.pedidoForm.value.nombreCliente;
    this.solicitudPedido.cedula = this.pedidoForm.value.cedulaCliente;
    this.solicitudPedido.direccion = this.pedidoForm.value.direccion;
    this.solicitudPedido.idUsuario = 1;
    this.pedidoServices.crear(this.solicitudPedido).subscribe(() => this.manejarCreacionPedidoExitosa());
  }

  public manejarCreacionPedidoExitosa(): void {
    alert('Su pedido se creo exitosamente');
    this.router.navigateByUrl('/home');
  }

}
