import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatProgressBarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipLocationModule } from 'pip-webui2-locations';
import { PipTimeRangeModule } from 'pip-webui2-dates';
import { PipDocumentListModule } from 'pip-webui2-documents';
import { PipCollageModule } from 'pip-webui2-pictures';

import { PipChecklistComponent } from './checklist.component';
import { PipChecklistElementComponent } from './checklist-element.component';

@NgModule({
  declarations: [
    PipChecklistComponent,
    PipChecklistElementComponent
  ],
  imports: [
    CommonModule,
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
