import { WvEmpDirPage } from './app.po';

describe('wv-emp-dir App', () => {
  let page: WvEmpDirPage;

  beforeEach(() => {
    page = new WvEmpDirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
