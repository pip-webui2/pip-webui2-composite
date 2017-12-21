import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule } from '@angular/material';

import { PipCompositeEditElementComponent } from './composite-edit-element.component';

@NgModule({
  declarations: [
    PipCompositeEditElementComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    PipCompositeEditElementComponent
  ],
  providers: [],
})
export class PipCompositeEditElementModule { }