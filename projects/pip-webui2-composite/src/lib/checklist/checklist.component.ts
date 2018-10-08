import { Component, Input, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { PipChecklistElement } from '../shared/checklist-element.model';

@Component({
    selector: 'pip-checklist',
    templateUrl: 'checklist.component.html',
    styleUrls: ['./checklist.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition('* => void', [
                style({ height: '48px', opacity: '1' }),
                animate('.35s ease', style({ height: '0', opacity: '0' })),
            ]),
            transition('void => *', [
                style({ height: '0', opacity: '0' }),
                animate('.35s ease', style({ height: '48px', opacity: '1' })),
            ])
        ]),
    ]
})
export class PipChecklistComponent implements OnInit, AfterViewInit {
    @Input() public elements: PipChecklistElement[] = [];
    @Input() disabled = false;

    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-checklist', true);
    }

    ngAfterViewInit() {
    }
}
