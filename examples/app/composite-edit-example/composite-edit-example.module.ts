import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatCardModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { CompositeEditExampleComponent } from './composite-edit-example.component';
import { PipCompositeEditModule, PipCompositeToolbarModule } from '../pip-webui2-composite';

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
    MatCardModule,

    TranslateModule,

    PipCompositeEditModule,
    PipCompositeToolbarModule
  ],
  exports: [
    CompositeEditExampleComponent
  ]
})
export class CompositeEditExampleModule { }