import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core'

import { PipChecklistComponent } from './checklist.component';
import { PipChecklistElementComponent } from './checklist-element.component';

import { PipLocationModule } from 'pip-webui2-locations';
import { PipTimeRangeModule } from 'pip-webui2-dates';
import { PipDocumentListModule } from 'pip-webui2-documents';
import { PipCollageModule } from 'pip-webui2-pictures';

@NgModule({
  declarations: [
    PipChecklistComponent,
    PipChecklistElementComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,

    TranslateModule,

    PipLocationModule,
    PipTimeRangeModule,
    PipDocumentListModule,
    PipCollageModule
  ],
  exports: [
    PipChecklistComponent,
    PipChecklistElementComponent
  ],
  providers: [],
})
export class PipChecklistModule { }