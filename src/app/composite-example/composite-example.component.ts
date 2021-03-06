import { Component, OnInit } from '@angular/core';
import { PipCompositeElement, PipCompositeElementTypes } from 'pip-webui2-composite';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-composite-example',
  templateUrl: './composite-example.component.html',
  styleUrls: ['./composite-example.component.scss']
})
export class CompositeExampleComponent implements OnInit {

  public startDate = new Date();
  public endDate = new Date();
  public disabled = false;

  public elements: PipCompositeElement[] = [
    {
      type: PipCompositeElementTypes.TEXT,
      // tslint:disable-next-line:max-line-length
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      type: PipCompositeElementTypes.CHECKLIST,
      elements: [
        {
          text: 'Create checklist edit component',
          checked: true
        },
        {
          text: 'Create checklist view component',
          checked: true
        },
        {
          text: 'Add checklist view component to composite view component',
          checked: true
        }
      ]
    },
    {
      type: PipCompositeElementTypes.LOCATION,
      location: {
        coordinates: [48.8534100, 2.3488000]
      },
      locationName: 'Paris'
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
        './assets/boy2.png',
        './assets/girl.png',
        './assets/girl2.png',
        './assets/boy.png'
      ]
    },
    {
      type: PipCompositeElementTypes.TIME,
      startDate: this.startDate,
      endDate: this.endDate
    },
    {
      type: PipCompositeElementTypes.LOCATION,
      location: {
        coordinates: [51.5085300, -0.1257400]
      },
      locationName: 'London'
    }
  ];

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Composite');
  }

  ngOnInit() {
    this.startDate.setHours(10, 0, 0, 0);
    this.endDate.setHours(this.startDate.getHours() + 10);
  }

}
