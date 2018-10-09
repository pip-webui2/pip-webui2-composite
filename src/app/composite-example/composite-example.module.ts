import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipCompositeModule } from 'pip-webui2-composite';
import { PipSidenavModule } from 'pip-webui2-layouts';
import { PipNavModule } from 'pip-webui2-nav';
import { CompositeExampleComponent } from './composite-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatSlideToggleModule, MatCardModule,
    TranslateModule,
    PipCompositeModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [CompositeExampleComponent]
})
export class CompositeExampleModule { }
