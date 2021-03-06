import { Component, Input, Output, OnInit, OnDestroy, AfterViewInit, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { CompositeElementTypes } from '../shared/composite-element-types.model';
import { PipCompositeElement } from '../shared/composite-element.model';
import { throttle } from '../shared/utils';

@Component({
    selector: 'pip-composite-edit',
    templateUrl: 'composite-edit.component.html',
    styleUrls: ['./composite-edit.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition('* => void', [
                style({ 'max-height': '200px', opacity: '1' }),
                animate('.35s ease', style({ 'max-height': '0', opacity: '0' })),
            ]),
            transition('void => *', [
                style({ opacity: '0' }),
                animate('.35s ease', style({ opacity: '1' })),
            ])
        ]),
    ]
})
export class PipCompositeEditComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() public elements: PipCompositeElement[] = [];
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onElementsChange: EventEmitter<PipCompositeElement[]> = new EventEmitter<PipCompositeElement[]>();
    @Input() scrollContainer: string = null;

    private draggedElementHeight: number;
    private prevStyledElement: HTMLElement;
    private draggedHtmlElement: HTMLElement;
    private draggedIndex: number = null;
    private draggedElement: PipCompositeElement;

    private debouncedSetPadding: any;

    public disableForAnimation = true;

    public elementTypes: CompositeElementTypes = new CompositeElementTypes();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-composite-edit', true);
    }

    ngOnInit() {
        this.disableForAnimation = false;
    }

    ngAfterViewInit() {
        this.debouncedSetPadding = throttle((element) => {
            this.setPadding(element);
        }, 250);
    }

    ngOnDestroy() {

    }

    public deleteElement(index) {
        this.elements.splice(index, 1);
        this.onElementsChange.emit(this.elements);
    }

    public onDragStart(event, index) {
        this.draggedIndex = index;
        this.draggedElement = this.elements[index];
        const elements = this.elRef.nativeElement.querySelectorAll('.pip-composite-element');
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
        const elements = this.elRef.nativeElement.querySelectorAll('.pip-composite-element');
        this.debouncedSetPadding(elements[index]);
    }

    public onDropSuccess(event, index) {
        if (this.draggedHtmlElement === event.target) { return; }

        const copy: PipCompositeElement = this.elements.splice(this.draggedIndex, 1)[0];
        this.elements.splice(this.draggedIndex < index ? index - 1 : index, 0, copy);

        this.onElementsChange.emit(this.elements);
    }

    public onDragStop(event, index) {
        this.elRef.nativeElement.classList.remove('animations');

        setTimeout(() => {
            this.draggedElementHeight = 0;
            this.prevStyledElement.style.paddingTop = 0 + 'px';
            this.prevStyledElement = null;
            this.disableForAnimation = false;
        });
    }

    public addByType(type: any) {
        this.elements.push({
            type: type
        });
        if (this.scrollContainer) {
            setTimeout(() => {
                const sContainer = document.querySelector(this.scrollContainer);
                sContainer.scrollTop = sContainer.scrollHeight;
            });
        }
    }

    private setPadding(element: HTMLElement) {
        if (this.prevStyledElement) { this.prevStyledElement.style.paddingTop = 0 + 'px'; }
        element.style.paddingTop = this.draggedElementHeight + 'px';
        this.prevStyledElement = element;
    }
}
