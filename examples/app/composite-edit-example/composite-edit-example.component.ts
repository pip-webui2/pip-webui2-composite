import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { PipCompositeElement, PipCompositeElementTypes } from '../pip-webui2-composite';

@Component({
    selector: 'composite-edit-example',
    templateUrl: 'composite-edit-example.component.html',
    styleUrls: ['./composite-edit-example.component.scss']
})
export class CompositeEditExampleComponent implements OnInit {

    public elements: PipCompositeElement[] = [
        { 
            type: PipCompositeElementTypes.TEXT
        },
        {
            type: PipCompositeElementTypes.LOCATION
        }
    ];

    ngOnInit() { }

    
}