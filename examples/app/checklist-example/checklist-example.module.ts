import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSlideToggleModule, MatCardModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { ChecklistExampleComponent } from './checklist-example.component';
import { PipChecklistEditModule, PipChecklistModule } from '../pip-webui2-composite';

@NgModule({
  declarations: [
    ChecklistExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,

    TranslateModule,

    PipChecklistEditModule,
    PipChecklistModule
  ],
  exports: [
    ChecklistExampleComponent
  ],
  providers: [
    
  ],
})
export class ChecklistExampleModule { }