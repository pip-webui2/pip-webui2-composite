import * as _ from 'lodash';
import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-composite-edit',
    templateUrl: 'composite-edit.component.html',
    styleUrls: ['./composite-edit.component.scss']
})
export class PipCompositeEditComponent implements OnInit, AfterViewInit {
    
    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-composite-edit', true);
    }

    ngAfterViewInit() {
       
    }

    ngOnDestroy() {

    }
}