import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(cadena:string) {
    return browser.get(browser.baseUrl+cadena) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
