import { Ng1OrdersAngularPocApplicationPage } from './app.po';

describe('ng1-orders-angular-poc-application App', () => {
  let page: Ng1OrdersAngularPocApplicationPage;

  beforeEach(() => {
    page = new Ng1OrdersAngularPocApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
