import * as _ from 'lodash';
import { Component, QueryList, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { CompositeElementTypes } from '../shared/composite-element-types.model';
import { PipCompositeElement } from '../shared/composite-element.model';

@Component({
    selector: 'pip-composite',
    templateUrl: 'composite.component.html',
    styleUrls: ['./composite.component.scss']
})
export class PipCompositeComponent implements OnInit, AfterViewInit {
    @Input() public elements: PipCompositeElement[] = [];
    public elementTypes: CompositeElementTypes = new CompositeElementTypes();

    @Input() disabled: boolean = false;

    ngOnInit() {}

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-composite', true);
        
    }

    ngAfterViewInit() { 
    }
}