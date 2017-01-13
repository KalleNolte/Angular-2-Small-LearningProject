import { ListenAppCliPage } from './app.po';

describe('listen-app-cli App', function() {
  let page: ListenAppCliPage;

  beforeEach(() => {
    page = new ListenAppCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
