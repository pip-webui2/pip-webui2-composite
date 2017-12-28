import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core'

import { PipChecklistEditComponent } from './checklist-edit.component';

import { PipDraggableModule } from 'pip-webui2-behaviors';

@NgModule({
  declarations: [
    PipChecklistEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,

    TranslateModule,

    PipDraggableModule
  ],
  exports: [
    PipChecklistEditComponent
  ],
  providers: [],
})
export class PipChecklistEditModule { }