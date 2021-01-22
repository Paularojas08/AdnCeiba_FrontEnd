import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkLogin = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));
    linkPedido = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

    private listaItems = element.all(by.xpath('/html/body/app-root/app-navbar/nav/a'));

    async clickBotonLogin() {
        await this.linkLogin.click();
    }
    async clickBotonPedido() {
        await this.linkPedido.click();
    }

    async contarItems() {
        return this.listaItems.count();
    }
}
