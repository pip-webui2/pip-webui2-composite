import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "Composite" in appbar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Composite');
  });
});
