import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeExampleComponent } from './composite-example.component';

describe('CompositeExampleComponent', () => {
  let component: CompositeExampleComponent;
  let fixture: ComponentFixture<CompositeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
