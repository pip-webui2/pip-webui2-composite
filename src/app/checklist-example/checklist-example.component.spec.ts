import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaModule, PipSidenavModule } from 'pip-webui2-layouts';

import { ChecklistExampleComponent } from './checklist-example.component';
import { ChecklistExampleModule } from './checklist-example.module';

describe('ChecklistExampleComponent', () => {
  let component: ChecklistExampleComponent;
  let fixture: ComponentFixture<ChecklistExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        TranslateModule.forRoot(),
        PipMediaModule.forRoot(),
        PipSidenavModule.forRoot(),

        ChecklistExampleModule
      ]
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
