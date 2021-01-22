import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPedidoComponent } from './crear-pedido.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SeguridadService } from '@core/services/seguridad.service';
import { HttpService } from '@core/services/http.service';
import { ProductoService } from '@pedido/shared/service/producto.service';
import { MunicipioService } from '@pedido/shared/service/municipio.service';
import { PedidoService } from '../../shared/service/pedido.service';

describe('CrearPedidoComponent', () => {
    let component: CrearPedidoComponent;
    let fixture: ComponentFixture<CrearPedidoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrearPedidoComponent],
            imports: [
                CommonModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [SeguridadService,ProductoService,MunicipioService,PedidoService,HttpService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrearPedidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deberia crear pedido sin problema', () => {
       
        expect(component).toBeTruthy();
    });


});