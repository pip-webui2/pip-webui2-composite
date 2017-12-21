import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-composite-edit-element',
    templateUrl: 'composite-edit-element.component.html',
    styleUrls: ['./composite-edit-element.component.scss']
})
export class PipCompositeEditElementComponent implements OnInit, AfterViewInit {
    
    ngOnInit() {
        
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-composite-edit-element', true);
    }

    ngAfterViewInit() { }
}