import { Component, OnInit } from '@angular/core';
import { PipChecklistElement } from '../pip-webui2-composite';

@Component({
    selector: 'checklist-example',
    templateUrl: 'checklist-example.component.html',
    styleUrls: ['./checklist-example.component.scss']
})
export class ChecklistExampleComponent implements OnInit {

    public startDate = new Date();
    public endDate = new Date();

    public elements: PipChecklistElement[] = [
        {
            text: 'Buy christmas tree',
            checked: true,
        },
        {
            text: 'Buy gifts',
        },
        {
            text: 'Go to the gym on Saturday',
        },
        {
            text: 'Finish magistry site',
        },
        {
            text: 'Some text here...',
        }
    ];

    ngOnInit() {

    }

}