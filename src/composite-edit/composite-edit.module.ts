import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipCompositeModule } from '../composite/composite.module';

import { PipCompositeEditComponent } from './composite-edit.component';

@NgModule({
  declarations: [
    PipCompositeEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,

    PipCompositeModule
  ],
  exports: [
    PipCompositeEditComponent
  ],
  providers: [],
})
export class PipCompositeEditModule { }