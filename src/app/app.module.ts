import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatListModule, MatButtonModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import {
    PipAppbarModule,
    PipRightnavModule,
    PipMediaModule,
    PipSidenavModule,
    PipMainLayoutAltModule,
    PipRootLayoutModule,
    PipSidenavExpanderModule
} from 'pip-webui2-layouts';
import {
    PipBreadcrumbModule,
    PipNavIconModule,
    PipPrimaryActionsModule,
    PipSecondaryActionsModule,
    PipNavModule,
    PipNavHeaderModule,
    PipNavMenuModule
} from 'pip-webui2-nav';

import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChecklistExampleModule } from './checklist-example/checklist-example.module';
import { CompositeEditExampleModule } from './composite-edit-example/composite-edit-example.module';
import { CompositeExampleModule } from './composite-example/composite-example.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule, MatListModule, MatButtonModule,
        TranslateModule.forRoot(),

        PipThemesModule.forRoot(),
        PipAppbarModule.forRoot(),
        PipRightnavModule.forRoot(),
        PipMediaModule.forRoot(),
        PipSidenavModule.forRoot(),
        PipMainLayoutAltModule,
        PipRootLayoutModule,
        PipSidenavExpanderModule,
        PipBreadcrumbModule,
        PipNavIconModule,
        PipPrimaryActionsModule,
        PipSecondaryActionsModule,
        PipNavModule,
        PipNavHeaderModule,
        PipNavMenuModule,

        AppRoutingModule,
        ChecklistExampleModule,
        CompositeEditExampleModule,
        CompositeExampleModule
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
