import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidoComponent } from './listar-pedido.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { PedidoService } from '../../shared/service/pedido.service';

describe('ListarPedidoComponent', () => {
    let component: ListarPedidoComponent;
    let fixture: ComponentFixture<ListarPedidoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListarPedidoComponent],
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
        fixture = TestBed.createComponent(ListarPedidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deberia crear pedido sin problema', () => {
       
        expect(component).toBeTruthy();
    });


});