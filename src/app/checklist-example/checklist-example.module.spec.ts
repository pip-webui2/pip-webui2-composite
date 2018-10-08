import { ChecklistExampleModule } from './checklist-example.module';

describe('ChecklistExampleModule', () => {
  let checklistExampleModule: ChecklistExampleModule;

  beforeEach(() => {
    checklistExampleModule = new ChecklistExampleModule();
  });

  it('should create an instance', () => {
    expect(checklistExampleModule).toBeTruthy();
  });
});
