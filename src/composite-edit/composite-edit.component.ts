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
        console.log('this.elements', this.elements);
        this.onElementsChange.emit(this.elements);
    }
}