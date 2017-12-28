import * as _ from 'lodash';
import { Component, QueryList, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
//import { PipChecklistElement } from '../shared/checklist-element.model';

@Component({
    selector: 'pip-checklist',
    templateUrl: 'checklist.component.html',
    styleUrls: ['./checklist.component.scss']
})
export class PipChecklistComponent implements OnInit, AfterViewInit {
    @Input() public elements: any[] /*PipChecklistElement[]*/ = [];
    @Input() disabled: boolean = false;

    ngOnInit() {}

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