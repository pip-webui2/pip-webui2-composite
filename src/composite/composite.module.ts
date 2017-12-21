import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule, MatButtonModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core'

import { PipCompositeComponent } from './composite.component';

@NgModule({
  declarations: [
    PipCompositeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,

    TranslateModule
  ],
  exports: [
    PipCompositeComponent
  ],
  providers: [],
})
export class PipCompositeModule { }