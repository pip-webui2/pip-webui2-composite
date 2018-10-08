import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatProgressBarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipDraggableModule } from 'pip-webui2-behaviors-temp';

import { PipChecklistEditComponent } from './checklist-edit.component';

@NgModule({
  declarations: [
    PipChecklistEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
