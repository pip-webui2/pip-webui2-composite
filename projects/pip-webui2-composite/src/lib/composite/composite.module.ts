import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatProgressBarModule, MatButtonModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipLocationModule } from 'pip-webui2-locations';
import { PipTimeRangeModule } from 'pip-webui2-dates';
import { PipDocumentListModule } from 'pip-webui2-documents';
import { PipCollageModule } from 'pip-webui2-pictures';

import { PipCompositeComponent } from './composite.component';
import { PipChecklistModule } from '../checklist/checklist.module';

@NgModule({
  declarations: [
    PipCompositeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,

    TranslateModule,

    PipLocationModule,
    PipTimeRangeModule,
    PipDocumentListModule,
    PipCollageModule,
    PipChecklistModule
  ],
  exports: [
    PipCompositeComponent
  ],
  providers: [],
})
export class PipCompositeModule { }
