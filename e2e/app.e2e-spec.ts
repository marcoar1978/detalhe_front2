import { DetalheFrontPage } from './app.po';

describe('detalhe-front App', function() {
  let page: DetalheFrontPage;

  beforeEach(() => {
    page = new DetalheFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
