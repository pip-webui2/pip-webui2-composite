import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { CompositeEditExampleComponent } from './composite-edit-example.component';
import { PipCompositeEditModule, PipCompositeEditModule } from '../pip-webui2-documents';

@NgModule({
  declarations: [
    CompositeEditExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    TranslateModule,

    PipCompositeEditModule,
    PipCompositeEditModule
  ],
  exports: [
    CompositeEditExampleComponent
  ]
})
export class CompositeEditExampleModule { }