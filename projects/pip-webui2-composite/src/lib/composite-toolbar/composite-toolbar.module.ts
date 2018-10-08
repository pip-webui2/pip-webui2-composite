import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipLocationModule } from 'pip-webui2-locations';
import { PipTimeRangeModule } from 'pip-webui2-dates';
import { PipDocumentListModule } from 'pip-webui2-documents';
import { PipCollageModule } from 'pip-webui2-pictures';

import { PipCompositeToolbarComponent } from './composite-toolbar.component';

@NgModule({
  declarations: [
    PipCompositeToolbarComponent
  ],
  imports: [
    CommonModule,
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
