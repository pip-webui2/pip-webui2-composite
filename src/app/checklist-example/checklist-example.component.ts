import { Component, OnInit } from '@angular/core';
import { PipChecklistElement } from 'pip-webui2-composite';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-checklist-example',
  templateUrl: './checklist-example.component.html',
  styleUrls: ['./checklist-example.component.scss']
})
export class ChecklistExampleComponent implements OnInit {

  public startDate = new Date();
  public endDate = new Date();
  public disabled = false;

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

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Checklist');
  }

  ngOnInit() {
  }

}
