import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

import { PipCompositeEditComponent } from './composite-edit.component';
import { PipDraggableModule } from 'pip-webui2-behaviors';
import { PiplocationEditModule } from 'pip-webui2-locations';

@NgModule({
  declarations: [
    PipCompositeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,

    PipDraggableModule,
    PiplocationEditModule
  ],
  exports: [
    PipCompositeEditComponent
  ],
  providers: [],
})
export class PipCompositeEditModule { }