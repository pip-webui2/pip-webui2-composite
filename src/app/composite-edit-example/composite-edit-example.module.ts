import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipCompositeEditModule, PipCompositeToolbarModule } from 'pip-webui2-composite';
import { PipSidenavModule } from 'pip-webui2-layouts-temp';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { CompositeEditExampleComponent } from './composite-edit-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatButtonToggleModule, MatCardModule,
    TranslateModule,
    PipCompositeEditModule, PipCompositeToolbarModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [CompositeEditExampleComponent]
})
export class CompositeEditExampleModule { }
