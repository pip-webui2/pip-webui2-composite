import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'composite-edit-example',
    templateUrl: 'composite-edit-example.component.html',
    styleUrls: ['./composite-edit-example.component.scss']
})
export class CompositeEditExampleComponent implements OnInit {

    public sources: string[] = [
        './assets/boy.png',
        './assets/girl2.png',
        './assets/boy2.png',
        './assets/girl.png',
        'https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg'
    ];
    public disabled: boolean = false;

    ngOnInit() { }

    public onImageLoad(results) {
        console.log('Image loaded: ', results);
    }

    public onImageDelete(results) {
        console.log('Image deleted!');
    }

    public docs: any[] = [
        {
            url: './assets/boy.png'
        },
        {
            url: './assets/girl.png'
        },
        {
            url: './assets/girl2.png'
        },
        {
            url: './assets/boy2.png'
        }
    ];

    public uploadDocs() {
        _.each(this.docs, (doc) => {
            doc.progressVisibility = true;
            doc.progressMode = 'indeterminate';
            this.disabled = true;
            setTimeout(() => {
                 doc.progressVisibility = false;
                 this.disabled = false;
            }, 2000);
        });
    }

    public updateComposites(docs) {
        this.docs = docs;
    }
}