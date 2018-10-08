import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecklistExampleComponent } from './checklist-example/checklist-example.component';
import { CompositeEditExampleComponent } from './composite-edit-example/composite-edit-example.component';
import { CompositeExampleComponent } from './composite-example/composite-example.component';

const appRoutes: Routes = [
    { path: 'composite', component: CompositeExampleComponent },
    { path: 'composite_edit', component: CompositeEditExampleComponent },
    { path: 'checklist', component: ChecklistExampleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'composite' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
