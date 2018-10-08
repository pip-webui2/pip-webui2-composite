import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { PipDraggableModule } from 'pip-webui2-behaviors-temp';
import { PiplocationEditModule } from 'pip-webui2-locations';
import { PipTimeRangeEditModule } from 'pip-webui2-dates';
import { PipDocumentListEditModule } from 'pip-webui2-documents';
import { PipPictureListEditModule } from 'pip-webui2-pictures';

import { PipCompositeEditComponent } from './composite-edit.component';
import { PipChecklistEditModule } from '../checklist-edit/checklist-edit.module';

@NgModule({
  declarations: [
    PipCompositeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,

    PipDraggableModule,
    PiplocationEditModule,
    PipTimeRangeEditModule,
    PipDocumentListEditModule,
    PipPictureListEditModule,
    PipChecklistEditModule
  ],
  exports: [
    PipCompositeEditComponent
  ],
  providers: [],
})
export class PipCompositeEditModule { }
