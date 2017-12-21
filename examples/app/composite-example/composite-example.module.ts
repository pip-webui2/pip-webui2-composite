import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { CompositeExampleComponent } from './composite-example.component';
import { PipCompositeModule, PipCompositeModule } from '../pip-webui2-documents';

@NgModule({
  declarations: [
    CompositeExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,

    TranslateModule,

    PipCompositeModule,
    PipCompositeModule
  ],
  exports: [
    CompositeExampleComponent
  ],
  providers: [
    
  ],
})
export class CompositeExampleModule { }