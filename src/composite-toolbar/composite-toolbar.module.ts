import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core'

import { PipCompositeToolbarComponent } from './composite-toolbar.component';

import { PipLocationModule } from 'pip-webui2-locations';
import { PipTimeRangeModule } from 'pip-webui2-dates';
import { PipDocumentListModule } from 'pip-webui2-documents';
import { PipCollageModule } from 'pip-webui2-pictures';

@NgModule({
  declarations: [
    PipCompositeToolbarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,

    TranslateModule,

    PipLocationModule,
    PipTimeRangeModule,
    PipDocumentListModule,
    PipCollageModule
  ],
  exports: [
    PipCompositeToolbarComponent,
  ],
  providers: [],
})
export class PipCompositeToolbarModule { }