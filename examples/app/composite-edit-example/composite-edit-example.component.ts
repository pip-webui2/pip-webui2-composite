import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { PipCompositeElement, PipCompositeElementTypes } from '../pip-webui2-composite';

@Component({
    selector: 'composite-edit-example',
    templateUrl: 'composite-edit-example.component.html',
    styleUrls: ['./composite-edit-example.component.scss']
})
export class CompositeEditExampleComponent implements OnInit {

    public startDate = new Date();
    public endDate = new Date();

    public elements: PipCompositeElement[] = [
        {
            type: PipCompositeElementTypes.TEXT,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: PipCompositeElementTypes.LOCATION,
            location: {
                coordinates: [48.8534100, 2.3488000]
            }
        },
        {
            type: PipCompositeElementTypes.DOCUMENTS,
            documents: [
                {
                    url: './assets/boy.png'
                }
            ]
        },
        {
            type: PipCompositeElementTypes.PICTURES,
            pictures: [
                './assets/boy2.png'
            ]
        },
        {
            type: PipCompositeElementTypes.TIME,
            startDate: this.startDate,
            endDate: this.endDate
        }
    ];

    ngOnInit() { 
        this.startDate.setHours(10, 0, 0, 0);
        this.endDate.setHours(this.startDate.getHours() + 10);
    }


}