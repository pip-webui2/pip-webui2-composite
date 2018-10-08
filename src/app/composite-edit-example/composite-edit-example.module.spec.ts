import { CompositeEditExampleModule } from './composite-edit-example.module';

describe('CompositeEditExampleModule', () => {
  let compositeEditExampleModule: CompositeEditExampleModule;

  beforeEach(() => {
    compositeEditExampleModule = new CompositeEditExampleModule();
  });

  it('should create an instance', () => {
    expect(compositeEditExampleModule).toBeTruthy();
  });
});
