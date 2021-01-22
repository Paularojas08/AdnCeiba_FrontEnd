import { AppPage } from '../app.po';
import { browser, logging } from 'protractor';
import { NavbarPage } from '../../src/page/navbar/navbar.po';
import { PedidoPage } from '../page/pedido/pedido.po';
describe('workspace-project App', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let pedido: PedidoPage;

  beforeEach(() => {
      page = new AppPage();
      navBar = new NavbarPage();
      pedido = new PedidoPage();
  });


  it('Deberia listar detalle pedido', () => {
      navBar.clickBotonPedido();
      page.navigateTo('/login');
      pedido.ingresarDatosPedido();
      pedido.clickBtnBuscar();
      expect(5).toBe(pedido.contarColumnas());
      
  });
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});