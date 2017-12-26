import * as _ from 'lodash';
import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { CompositeElementTypes } from '../shared/composite-element-types.model';
import { PipCompositeElement } from '../shared/composite-element.model';

@Component({
    selector: 'pip-composite-edit',
    templateUrl: 'composite-edit.component.html',
    styleUrls: ['./composite-edit.component.scss']
})
export class PipCompositeEditComponent implements OnInit, AfterViewInit {
    @Input() public elements: PipCompositeElement[] = [];
    @Output() onElementsChange: EventEmitter<PipCompositeElement[]> = new EventEmitter<PipCompositeElement[]>();

    private draggedElementHeight: number;
    private prevStyledElement: HTMLElement;
    private draggedHtmlElement: HTMLElement;
    private draggedIndex: number = null;
    private draggedElement: PipCompositeElement;

    public elementTypes: CompositeElementTypes = new CompositeElementTypes();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-composite-edit', true);
    }

    ngOnInit() {}

    ngAfterViewInit() {

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
        let elements = this.elRef.nativeElement.querySelectorAll('.pip-composite-element');
        this.draggedHtmlElement = elements[index];
        this.draggedElementHeight = elements[index].offsetHeight;
        if (index < elements.length - 1) {
            this.setPadding(elements[index + 1]);
        }

        setTimeout(() => {
            this.elRef.nativeElement.classList.add('animations');
        });
    }

    public onEnter(event, index) {
        let elements = this.elRef.nativeElement.querySelectorAll('.pip-composite-element');
        this.setPadding(elements[index ]);
    }

    public onDropSuccess(event, index) {
        if (this.draggedHtmlElement == event.target) return;

        let copy: PipCompositeElement = this.elements.splice(this.draggedIndex, 1)[0];
        this.elements.splice(this.draggedIndex < index ? index - 1 : index, 0, copy);
    }

    public onDragStop() {
        this.elRef.nativeElement.classList.remove('animations');

        setTimeout(() => {
            this.draggedElementHeight = 0;
            this.prevStyledElement.style.paddingTop = 0 + 'px';
            this.prevStyledElement = null;
        });
    }

    private setPadding(element: HTMLElement) {
        if (this.prevStyledElement) this.prevStyledElement.style.paddingTop = 0 + 'px';
        element.style.paddingTop = this.draggedElementHeight + 'px';
        this.prevStyledElement = element;
    }
}