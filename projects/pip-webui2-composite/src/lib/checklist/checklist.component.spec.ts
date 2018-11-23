import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PipChecklistComponent } from './checklist.component';
import { PipChecklistModule } from './checklist.module';

describe('a checklist component', () => {
    let component: PipChecklistComponent;
    let fixture: ComponentFixture<PipChecklistComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),

                PipChecklistModule
            ]
        });
        fixture = TestBed.createComponent(PipChecklistComponent);
        component = fixture.componentInstance;
    });

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
