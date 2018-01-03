import { Component, QueryList, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { PipCompositeToolbarElement } from '../shared/composite-toolbar-element.model';
import { PipCompositeElementTypes } from '../shared/composite-element-types.model'
import { PipCompositeEditComponent } from '../composite-edit/composite-edit.component';

@Component({
    selector: 'pip-composite-toolbar',
    templateUrl: 'composite-toolbar.component.html',
    styleUrls: ['./composite-toolbar.component.scss']
})
export class PipCompositeToolbarComponent implements OnInit, AfterViewInit {
    @Input() public elements: PipCompositeToolbarElement[] = [
        {
            type: PipCompositeElementTypes.TEXT,
            icon: 'title',
            action: null,
            color: '#757575'
        },
        {
            type: PipCompositeElementTypes.CHECKLIST,
            icon: 'checkbox',
            action: null,
            color: '#CB7E99'
        },
        {
            type: PipCompositeElementTypes.PICTURES,
            icon: 'photo',
            action: null,
            color: '#4EBFD9'
        },
        {
            type: PipCompositeElementTypes.DOCUMENTS,
            icon: 'insert_drive_file',
            action: null,
            color: '#8CC475'
        },
        {
            type: PipCompositeElementTypes.LOCATION,
            icon: 'place',
            action: null,
            color: '#F9B257'
        },
        {
            type: PipCompositeElementTypes.TIME,
            icon: 'access_time',
            action: null,
            color: '#09F'
        }
    ];
    @Input() disabled: boolean = false;
    @Input() compositeEdit: PipCompositeEditComponent;

    @Output() elementClick: EventEmitter<PipCompositeToolbarElement> = new EventEmitter<PipCompositeToolbarElement>();
    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-composite-toolbar', true);
    }

    ngAfterViewInit() {
    }

    private onClick(element: PipCompositeToolbarElement) {
        console.log();
        if (this.compositeEdit) this.compositeEdit.addByType(element.type);
        else {
            if (element.action && this.isFunction(element.action)) element.action(element);
        }
        this.elementClick.emit(element);
    }

    private isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
}