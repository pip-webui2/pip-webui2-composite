import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipChecklistEditModule, PipChecklistModule } from 'pip-webui2-composite';
import { PipSidenavModule } from 'pip-webui2-layouts-temp';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { ChecklistExampleComponent } from './checklist-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatSlideToggleModule, MatCardModule,
    TranslateModule,
    PipChecklistEditModule, PipChecklistModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [ChecklistExampleComponent]
})
export class ChecklistExampleModule { }
