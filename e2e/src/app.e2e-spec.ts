import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { NavbarPage } from '../src/page/navbar/navbar.po';
import { LoginPage } from '../src/page/login/login.po';
describe('workspace-project App', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let login: LoginPage;

  beforeEach(() => {
      page = new AppPage();
      navBar = new NavbarPage();
      login = new LoginPage();
  });


  it('Deberia ingresar', () => {
      navBar.clickBotonLogin();
      page.navigateTo('/login');
      login.ingresarDatosLogin;
      login.clickBtnLogin();
      expect(5).toBe(navBar.contarItems());
      
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});