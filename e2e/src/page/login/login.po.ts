import { by, element } from 'protractor';

export class LoginPage {

    inputCorreo = element(by.id("login"));
    inputContrasena = element(by.id('password'));
    btnIngresar = element(by.id('btnIngresar'));

    async ingresarDatosLogin() {
        await this.inputCorreo.sendKeys('admin@gmail.com');
        await this.inputContrasena.sendKeys('1234');
    }

    async clickBtnLogin() {
        await this.btnIngresar.click();
    }
}
