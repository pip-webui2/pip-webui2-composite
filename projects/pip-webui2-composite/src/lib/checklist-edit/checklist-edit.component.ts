import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

import { PipChecklistElement } from '../shared/checklist-element.model';
import { throttle } from '../shared/utils';

@Component({
    selector: 'pip-checklist-edit',
    templateUrl: 'checklist-edit.component.html',
    styleUrls: ['./checklist-edit.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition('* => void', [
                style({ height: '48px', opacity: '1'}),
                animate('.35s ease', style({ height: '0', opacity: '0'})),
            ]),
            transition('void => *', [
                style({ height: '0', opacity: '0'}),
                animate('.35s ease', style({ height: '48px', opacity: '1'})),
            ])
        ]),
    ]
})
export class PipChecklistEditComponent implements OnInit, AfterViewInit {

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-checklist-edit', true);
    }
    @Input() public elements: PipChecklistElement[] = [];
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onElementsChange: EventEmitter<PipChecklistElement[]> = new EventEmitter<PipChecklistElement[]>();
    @Input() disabled = false;

    private draggedElementHeight: number;
    private prevStyledElement: HTMLElement;
    private draggedHtmlElement: HTMLElement;
    private focusedElement: HTMLElement;
    private draggedIndex: number = null;
    private draggedElement: PipChecklistElement;

    private debouncedSetPadding: any;

    public disableForAnimation = true;

    ngOnInit() {
        this.disableForAnimation = false;
    }

    ngAfterViewInit() {
        this.debouncedSetPadding = throttle((element) => {
            this.setPadding(element);
        }, 250);
    }

    public deleteElement(index) {
        this.elements.splice(index, 1);
        this.onElementsChange.emit(this.elements);
    }

    public onDragStart(event, index) {
        this.draggedIndex = index;
        this.draggedElement = this.elements[index];
        const elements = this.elRef.nativeElement.querySelectorAll('.pip-checklist-element');
        this.draggedHtmlElement = elements[index];
        this.draggedElementHeight = elements[index].offsetHeight;
        if (index < elements.length - 1) {
            this.setPadding(elements[index + 1]);
        }

        setTimeout(() => {
            this.elRef.nativeElement.classList.add('animations');
        });
        this.disableForAnimation = true;
    }

    public onEnter(event, index) {
        const elements = this.elRef.nativeElement.querySelectorAll('.pip-checklist-element');
        this.debouncedSetPadding(elements[index]);
    }

    public onDropSuccess(event, index) {
        if (this.draggedHtmlElement === event.target) { return; }

        const copy: PipChecklistElement = this.elements.splice(this.draggedIndex, 1)[0];
        this.elements.splice(this.draggedIndex < index ? index - 1 : index, 0, copy);

        this.onElementsChange.emit(this.elements);
    }

    public onDragStop(event, index) {
        this.elRef.nativeElement.classList.remove('animations');

        setTimeout(() => {
            this.draggedElementHeight = 0;
            if (this.prevStyledElement) { this.prevStyledElement.style.paddingTop = 0 + 'px'; }
            this.prevStyledElement = null;
            this.disableForAnimation = false;
        });
    }

    public onAdd() {
        this.elements.push(new PipChecklistElement());
        this.onElementsChange.emit(this.elements);
    }

    public focusElement(index) {
        const elements = this.elRef.nativeElement.querySelectorAll('.pip-checklist-element');
        if (this.focusedElement === elements[index]) { return; }

        elements[index].classList.add('focused');
        if (this.focusedElement) { this.focusedElement.classList.remove('focused'); }
        this.focusedElement = elements[index];
    }

    private setPadding(element: HTMLElement) {
        if (this.prevStyledElement) { this.prevStyledElement.style.paddingTop = 0 + 'px'; }
        element.style.paddingTop = this.draggedElementHeight + 'px';
        this.prevStyledElement = element;
    }
}
