import { OutputPlayPage } from './app.po';

describe('output-play App', () => {
  let page: OutputPlayPage;

  beforeEach(() => {
    page = new OutputPlayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
