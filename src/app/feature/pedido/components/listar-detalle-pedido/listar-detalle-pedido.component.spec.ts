import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetallePedidoComponent } from './listar-detalle-pedido.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { PedidoService } from '../../shared/service/pedido.service';

describe('ListarDetallePedidoComponent', () => {
    let component: ListarDetallePedidoComponent;
    let fixture: ComponentFixture<ListarDetallePedidoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListarDetallePedidoComponent],
            imports: [
                CommonModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [PedidoService,HttpService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListarDetallePedidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deberia crear pedido sin problema', () => {
       
        expect(component).toBeTruthy();
    });


});