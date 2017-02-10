import { CoolCompPage } from './app.po';

describe('cool-comp App', function() {
  let page: CoolCompPage;

  beforeEach(() => {
    page = new CoolCompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
