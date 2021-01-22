import { by, element } from 'protractor';

export class PedidoPage {

    inputIdentificador = element(by.id("numeroseguimiento"));
    btnIngresar = element(by.id('buscar'));

    tabla = element(by.id("tablaDetalle"));

    async ingresarDatosPedido() {
        await this.inputIdentificador.sendKeys('fdb818e5-b459-46e5-bc5c-473a5992e48f');
    }

    async clickBtnBuscar() {
        await this.btnIngresar.click();
    }

    async contarColumnas() {
        return this.tabla.all(by.css("th")).count()
    }
}