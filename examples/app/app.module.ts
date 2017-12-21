import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { CompositeExampleModule } from './composite-example/composite-example.module';
import { CompositeExampleComponent } from './composite-example/composite-example.component';

import { CompositeEditExampleModule } from './composite-edit-example/composite-edit-example.module';
import { CompositeEditExampleComponent } from './composite-edit-example/composite-edit-example.component';

const appRoutes: Routes = [
  { path: 'composite', component: CompositeExampleComponent },
  { path: 'composite_edit', component: CompositeEditExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'composite' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    
    TranslateModule.forRoot(),

    PipThemesModule,

    ExampleListModule,
    CompositeExampleModule,
    CompositeEditExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 