import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule, MatButtonModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core'

import { PipCompositeComponent } from './composite.component';

import { PipLocationModule } from 'pip-webui2-locations';
import { PipTimeRangeModule } from 'pip-webui2-dates';
import { PipDocumentListModule } from 'pip-webui2-documents';
import { PipCollageModule } from 'pip-webui2-pictures';

@NgModule({
  declarations: [
    PipCompositeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,

    TranslateModule,

    PipLocationModule,
    PipTimeRangeModule,
    PipDocumentListModule,
    PipCollageModule
  ],
  exports: [
    PipCompositeComponent
  ],
  providers: [],
})
export class PipCompositeModule { }