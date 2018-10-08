import { CompositeExampleModule } from './composite-example.module';

describe('CompositeExampleModule', () => {
  let compositeExampleModule: CompositeExampleModule;

  beforeEach(() => {
    compositeExampleModule = new CompositeExampleModule();
  });

  it('should create an instance', () => {
    expect(compositeExampleModule).toBeTruthy();
  });
});
