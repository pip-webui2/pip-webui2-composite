import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistExampleComponent } from './checklist-example.component';

describe('ChecklistExampleComponent', () => {
  let component: ChecklistExampleComponent;
  let fixture: ComponentFixture<ChecklistExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
