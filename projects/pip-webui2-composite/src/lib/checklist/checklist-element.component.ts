import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'pip-checklist-element',
    templateUrl: 'checklist-element.component.html',
    styleUrls: ['./checklist-element.component.scss']
})
export class PipChecklistElementComponent implements OnInit, AfterViewInit {
    @Input() public disabled = false;
    @Input() checked: boolean;
    @Input() public text: boolean;
    @Output() change = new EventEmitter<boolean>();

    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-checklist-element', true);
    }

    ngAfterViewInit() { }

    onChange(checked) {
        this.checked = checked;
        this.change.emit(this.checked);
    }
}
