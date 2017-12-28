import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSlideToggleModule, MatCardModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { CompositeExampleComponent } from './composite-example.component';
import { PipCompositeModule } from '../pip-webui2-composite';

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
    MatCardModule,

    TranslateModule,

    PipCompositeModule
  ],
  exports: [
    CompositeExampleComponent
  ],
  providers: [
    
  ],
})
export class CompositeExampleModule { }