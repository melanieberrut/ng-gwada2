import { NgGwada2Page } from './app.po';

describe('ng-gwada2 App', function() {
  let page: NgGwada2Page;

  beforeEach(() => {
    page = new NgGwada2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
