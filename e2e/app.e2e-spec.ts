import { Ng2StorePage } from './app.po';

describe('ng2-store App', () => {
  let page: Ng2StorePage;

  beforeEach(() => {
    page = new Ng2StorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
